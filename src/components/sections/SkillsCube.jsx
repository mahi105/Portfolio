// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { OrbitControls, Html } from "@react-three/drei";
// import { skills } from "../../data/constants";
// import styled from "styled-components";

// const CubeContainer = styled.div`
//   width: 100%;
//   height: 600px;
//   margin-top: 50px;
//   background-color: ${({ theme }) => theme.bg};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// // Single face of the cube
// const SkillFace = ({ position, rotation, skillSet }) => {
//   return (
//     <mesh position={position} rotation={rotation}>
//       <boxGeometry attach="geometry" args={[4, 4, 0.1]} />
//       <meshStandardMaterial attach="material" color="rgba(17, 25, 40, 0.83)" />
//       <Html position={[0, 0, 0.06]} transform>
//         <div style={{ textAlign: "center", padding: "10px" }}>
//           <h3 style={{ color: "white" }}>{skillSet.title}</h3>
//           <ul>
//             {skillSet.skills.map((item, index) => (
//               <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "5px", color: "white" }}>
//                 <img src={item.image} alt={item.name} width="30" style={{ marginRight: "8px" }} />
//                 {item.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </Html>
//     </mesh>
//   );
// };

// // Main Cube Component
// const SkillsCube = () => {
//   const cubeRef = useRef();
//   const [rotation, setRotation] = useState([0, 0, 0]);

//   // Rotate the cube based on frame
//   useFrame(() => {
//     if (cubeRef.current) {
//       cubeRef.current.rotation.x = rotation[0];
//       cubeRef.current.rotation.y = rotation[1];
//     }
//   });

//   // Positions and rotations of cube faces
//   const positions = [
//     [0, 0, 2], // Front face
//     [2, 0, 0], // Right face
//     [-2, 0, 0], // Left face
//     [0, 2, 0], // Top face
//     [0, -2, 0], // Bottom face
//   ];
//   const rotations = [
//     [0, 0, 0],
//     [0, Math.PI / 2, 0],
//     [0, -Math.PI / 2, 0],
//     [Math.PI / 2, 0, 0],
//     [-Math.PI / 2, 0, 0],
//   ];

//   return (
//     <group ref={cubeRef}>
//       <OrbitControls enableZoom={false} enablePan={false} />
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} />
//       {skills.map((skillSet, index) => (
//         <SkillFace key={index} position={positions[index]} rotation={rotations[index]} skillSet={skillSet} />
//       ))}
//     </group>
//   );
// };

// export default SkillsCube;
