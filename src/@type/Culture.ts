import icons from "assets/images/icons";

export interface CultureType {
  image: keyof typeof icons;
  title: string;
  subtitle: string;
  description: string;
}
