/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Type declarations for static asset imports
declare module "*.png" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.jpeg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

declare module "*.svg" {
  const content: import("next/image").StaticImageData;
  export default content;
}

// Module declarations for packages without types
declare module "@react-pdf-viewer/core";
declare module "@react-pdf-viewer/default-layout";
