{
  description = "Description for the project";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

    git-hooks-nix = {
      url = "github:cachix/git-hooks.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs = inputs @ {flake-parts, ...}:
    flake-parts.lib.mkFlake {inherit inputs;} {
      imports = with inputs; [
        git-hooks-nix.flakeModule
      ];
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin" "x86_64-darwin"];
      perSystem = {
        pkgs,
        config,
        ...
      }: {
        pre-commit.settings.hooks = {
          gptcommit.enable = true;
        };
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs
          ];

          shellHook = ''
            ${config.pre-commit.installationScript}
            echo 1>&2 "[INFO] Welcome to the development shell!"

            ./init.sh
          '';
        };
      };
    };
}
