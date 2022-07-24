/*
 * Parce-que Tailwind ne prend pas en charge la concaténation des noms de classe,
 * Cette fonction recois un nom de couleur et retourne le nom de classe approprié.
 *
 * Voir la liste des couleurs ici (500): https://tailwindcss.com/docs/customizing-colors
 */

const backgroundHighlightColors = (colorName) => {
  let backgroundHighlightColor;
  let backgroundHighlightColorHover;
  switch (colorName) {
    case "#EF4444":
      backgroundHighlightColor = "bg-red-500";
      backgroundHighlightColorHover = "hover:bg-red-500";
      break;
    case "#F97316":
      backgroundHighlightColor = "bg-orange-500";
      backgroundHighlightColorHover = "bg-orange-500";
      break;
    case "#F59E0B":
      backgroundHighlightColor = "bg-amber-500";
      backgroundHighlightColorHover = "hover:bg-amber-500";
      break;
    case "#EAB308":
      backgroundHighlightColor = "bg-yellow-500";
      backgroundHighlightColorHover = "hover:bg-yellow-500";
      break;
    case "#84CC16":
      backgroundHighlightColor = "bg-lime-500";
      backgroundHighlightColorHover = "hover:bg-lime-500";
      break;
    case "#22C55E":
      backgroundHighlightColor = "bg-green-500";
      backgroundHighlightColorHover = "hover:bg-green-500";
      break;
    case "#10B981":
      backgroundHighlightColor = "bg-emerald-500";
      backgroundHighlightColorHover = "hover:bg-emerald-500";
      break;
    case "#14B8A6":
      backgroundHighlightColor = "bg-teal-500";
      backgroundHighlightColorHover = "hover:bg-teal-500";
      break;
    case "#06B6D4":
      backgroundHighlightColor = "bg-cyan-500";
      backgroundHighlightColorHover = "hover:gb-cyan-500";
      break;
    case "#0EA5E9":
      backgroundHighlightColor = "bg-sky-500";
      backgroundHighlightColorHover = "hover:bg-sky-500";
      break;
    case "#3B82F6":
      backgroundHighlightColor = "bg-blue-500";
      backgroundHighlightColorHover = "hover:bg-blue-500";
      break;
    case "#6366F1":
      backgroundHighlightColor = "bg-indigo-500";
      backgroundHighlightColorHover = "hover:gb-indigo-500";
      break;
    case "#8B5CF6":
      backgroundHighlightColor = "bg-violet-500";
      backgroundHighlightColorHover = "hover:bg-violet-500";
      break;
    case "#A855F7":
      backgroundHighlightColor = "bg-purple-500";
      backgroundHighlightColorHover = "hover:bg-purple-500";
      break;
    case "#C026D3":
      backgroundHighlightColor = "bg-fuchsia-500";
      backgroundHighlightColorHover = "bg-fuchsia-500";
      break;
    case "#EC4899":
      backgroundHighlightColor = "bg-pink-500";
      backgroundHighlightColorHover = "hover:bg-pink-500";
      break;
    case "#F43F5E":
      backgroundHighlightColor = "bg-rose-500";
      backgroundHighlightColorHover = "hover:bg-rose-500";
      break;
    default:
      backgroundHighlightColor = "bg-blue-500";
      backgroundHighlightColorHover = "hover:bg-blue-500";
      break;
  }
  return { backgroundHighlightColor, backgroundHighlightColorHover };
};

export default backgroundHighlightColors;
