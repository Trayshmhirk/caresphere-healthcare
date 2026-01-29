// Stylesheets
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.sass" {
  const content: { [className: string]: string };
  export default content;
}

// Images
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}

declare module "*.ico" {
  const value: string;
  export default value;
}

declare module "*.bmp" {
  const value: string;
  export default value;
}

// SVG
declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare module "*.svg?url" {
  const value: string;
  export default value;
}

// Fonts
declare module "*.woff" {
  const value: string;
  export default value;
}

declare module "*.woff2" {
  const value: string;
  export default value;
}

declare module "*.ttf" {
  const value: string;
  export default value;
}

declare module "*.eot" {
  const value: string;
  export default value;
}

// Videos
declare module "*.mp4" {
  const value: string;
  export default value;
}

declare module "*.webm" {
  const value: string;
  export default value;
}

// Audio
declare module "*.mp3" {
  const value: string;
  export default value;
}

declare module "*.wav" {
  const value: string;
  export default value;
}
