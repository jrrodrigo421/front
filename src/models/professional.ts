// // src/models/professional.ts
// export interface Professional {
//   name: string;
//   category: string;
//   location: string;
//   availability: string;
// }

export interface Professional {
  name: string;
  category: string;
  location: string;
  availability: string[]; // Agora é uma matriz de strings
}