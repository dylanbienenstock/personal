import { Component, AfterViewInit, Renderer, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from "three";

@Component({
    selector: 'app-icosahedron',
    templateUrl: './icosahedron.component.html',
    styleUrls: ['./icosahedron.component.scss']
})

// Thanks a lot to:
// https://github.com/makimenko/angular-three-examples

export class IcosahedronComponent implements AfterViewInit {
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

    private get canvas(): HTMLCanvasElement {
        return this.canvasRef.nativeElement;
    }

    private createScene() {
        this.scene = new THREE.Scene();

        var phongMaterial = new THREE.MeshPhongMaterial({
            color: 0xFFFFFF,
            flatShading: true,
            vertexColors: THREE.VertexColors,
            shininess: 0
        });

        var wireframeMaterial = new THREE.MeshBasicMaterial({
            color: 0x000000,
            wireframe: true,
            transparent: true
        });

        var geometry = new THREE.IcosahedronGeometry(50, 1);
        this.icosahedron = new THREE.Mesh(geometry, phongMaterial);
        // this.icosahedron.add(new THREE.Mesh(geometry, wireframeMaterial));

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

        this.camera = new THREE.PerspectiveCamera(
            this.fieldOfView,
            aspectRatio,
            this.nearClippingPane,
            this.farClippingPane
        );

        this.camera.position.x = 10;
        this.camera.position.y = 10;
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

    public render() {
        this.icosahedron.rotation.x += 0.001;
        this.icosahedron.rotation.y += 0.002;

        this.renderer.render(this.scene, this.camera);

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
}
