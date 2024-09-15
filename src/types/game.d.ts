declare namespace Game {
  type HotGame = {
    id: string;
    name?: string;
    description?: string;
    icon: string;
    image: string;
    details?: HotGameDetail[];
  };

  type HotCategory = {
    id: string;
    name?: string;
    description?: string;
    logos: string[];
    icon: string;
    image: string;
  };

  type HotGameDetail = {
    title?: string;
    value?: string;
  };
}
