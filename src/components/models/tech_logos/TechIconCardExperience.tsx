"use client";

import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

interface TechModel {
  name: string;
  modelPath: string;
  scale: number | [number, number, number];
 rotation: number[];
}

interface TechIconCardExperienceProps {
  model: TechModel;
}

const TechIconCardExperience = ({
  model,
}: TechIconCardExperienceProps) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    scene.scene.traverse((child: THREE.Object3D) => {
      const mesh = child as THREE.Mesh;

      if (mesh.isMesh) {
        mesh.material = new THREE.MeshStandardMaterial({ color: "#333" });
      }
    });

    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child: THREE.Object3D) => {
        const mesh = child as THREE.Mesh;

        if (mesh.isMesh && mesh.name === "Object_5") {
          mesh.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas style={{ background: "transparent" }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
      />
      <Environment preset="city" />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group
  scale={model.scale}
  rotation={model.rotation as [number, number, number]}
>
          <primitive object={scene.scene} />
        </group>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;