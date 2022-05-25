import icons from "assets/img/icons";

export interface CultureType {
  image: keyof typeof icons;
  title: string;
  subtitle: string;
  description: string;
}
