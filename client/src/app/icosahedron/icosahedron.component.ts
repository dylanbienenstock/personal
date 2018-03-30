import { Component, AfterViewInit, Renderer, ViewChild, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';
import * as THREE from "three";

@Component({
    selector: 'app-icosahedron',
    templateUrl: './icosahedron.component.html',
    styleUrls: ['./icosahedron.component.scss']
})

// Thanks a lot to:
// https://github.com/makimenko/angular-three-examples

export class IcosahedronComponent implements AfterViewInit {
	@Output() onRender: EventEmitter<number> = new EventEmitter();

    constructor() {
        this.render = this.render.bind(this);
    }

    @ViewChild("canvas")
    private canvasRef: ElementRef;

    private renderer: THREE.WebGLRenderer;
    private camera: THREE.PerspectiveCamera;
    private cameraTarget: THREE.Vector3;
    public scene: THREE.Scene;

    public fieldOfView: number = 60;
    public nearClippingPane: number = 1;
    public farClippingPane: number = 1100;

    public icosahedron: THREE.Object3D;
    public resizeTimeout: any;
    public speed: number = 1;

    public phongMinOpacity: number = 0.0;
    public wireframeMaxOpacity: number = 0.4;
    public fullOpacitySpeed: number = 10;
    public useOrthographic: boolean = true;

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
    }

    private createScene() {
        this.scene = new THREE.Scene();

        var phongMaterial = new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            flatShading: true,
            vertexColors: THREE.VertexColors,
			shininess: 0,
			transparent: true,
			opacity: this.phongMinOpacity
        });

        var wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x065D588,
            wireframe: true,
            transparent: true
        });

        var geometry = new THREE.IcosahedronGeometry(50, 1);
		this.icosahedron = new THREE.Mesh(geometry, phongMaterial);
        this.icosahedron.add(new THREE.Mesh(geometry, wireframeMaterial));

		this.scene.add(this.icosahedron);
    }

    private createLight() {
        var light = new THREE.PointLight(0xFFFFFF, 0.5, 1000);
        light.position.set(0, 0, 100);
        this.scene.add(light);

        var light2 = new THREE.PointLight(0xFFFFFF, 0.2, 1000);
        light2.position.set(0, 100, 100);
        this.scene.add(light2);

        var light3 = new THREE.PointLight(0xFFFFFF, 0.2, 1000);
        light3.position.set(100, 0, 100);
        this.scene.add(light3);
    }

    private createCamera() {
        let aspectRatio = this.getAspectRatio();

        if (this. useOrthographic) {
            this.camera = new THREE.OrthographicCamera(
                100 / -2,
                100 / 2,
                100 / 2,
                100 / -2,
                1,
                1000
            );
        } else {
            this.camera = new THREE.PerspectiveCamera(
                this.fieldOfView,
                aspectRatio,
                this.nearClippingPane,
                this.farClippingPane
            );
        }

        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 100;

        this.camera.lookAt(this.icosahedron.position);
    }

    private getAspectRatio(): number {
        let height = this.canvas.clientHeight;
        
        if (height === 0) {
            return 0;
        }

        return this.canvas.clientWidth / this.canvas.clientHeight;
    }

    private startRendering() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });

        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.autoClear = true;

        this.render();
    }

    lerp(v0, v1, t) {
        return v0 * (1 - t) + v1 * t
    }

    public render() {
		this.speed = this.lerp(this.speed, 1, 0.015);

        this.icosahedron.rotation.x += 0.001 * this.speed;
		this.icosahedron.rotation.y += 0.002 * this.speed;
		
        let destOpacity = this.phongMinOpacity + (1 - this.phongMinOpacity) * ((this.speed - 1) / this.fullOpacitySpeed);

		this.icosahedron.material.opacity = 
            this.lerp(this.icosahedron.material.opacity, destOpacity, 0.15);
            
        this.icosahedron.children[0].material.opacity =
            this.wireframeMaxOpacity - this.icosahedron.material.opacity * this.wireframeMaxOpacity;

		this.renderer.render(this.scene, this.camera);
        this.onRender.emit(1 - destOpacity);
        requestAnimationFrame(this.render);
    }

    @HostListener("window:resize", ["$event"])
    public onResize(event: Event) {
        clearTimeout(this.resizeTimeout);

        this.resizeTimeout = setTimeout(() => {
            this.resizeRenderer();
        }, 100);
    }

    public resizeRenderer() {
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.camera.aspect = this.getAspectRatio();
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    }

    ngAfterViewInit() {
        this.createScene();
        this.createLight();
        this.createCamera();
        this.startRendering();
    }

    onClick(event: Event) {
        event.preventDefault();
        event.stopPropagation();

        this.speed += 2;
    }
}
