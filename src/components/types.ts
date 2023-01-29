interface ComponentStructure {
  domElement: HTMLElement;
  render: () => void;
  addListeners?: () => void;
}

export default ComponentStructure;

export interface CardComponentStructure extends PokeApiSpritesStructure {
  sprites: {
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
  name: string;
}

interface PokeApiSpritesStructure extends PokeApiVersionsStructure {
  versions: Promise<PokeApiVersionsStructure>;
}

interface PokeApiVersionsStructure extends PokeApiGenerationvStructure {
  "generation-v": Promise<PokeApiGenerationvStructure>;
}

interface PokeApiGenerationvStructure extends PokeApiBlackWhiteStructure {
  "black-white": Promise<PokeApiBlackWhiteStructure>;
}

interface PokeApiBlackWhiteStructure extends PokeApiAnimatedStructure {
  animated: Promise<PokeApiAnimatedStructure>;
}

interface PokeApiAnimatedStructure {
  front_default: string;
}
