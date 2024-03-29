import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["hover:bg"], // etc],
  theme: {
    backgroundColor: {
      DEFAULT: "rgb(244, 244, 246)",
      Available: "rgb(20, 176, 83)",
      Body: "rgb(255, 255, 255)",
      BodyInverse: "rgb(18, 28, 45)",
      Brand: "rgb(0, 20, 137)",
      BrandHighlight: "rgb(242, 47, 70)",
      BrandHighlightWeakest: "rgba(242, 47, 70, 0.1)",
      BrandStrong: "rgb(3, 11, 93)",
      BrandStronger: "rgb(6, 3, 58)",
      Busy: "rgb(244, 124, 34)",
      Decorative10Weakest: "rgb(244, 244, 246)",
      Decorative20Weakest: "rgb(235, 244, 255)",
      Decorative30Weakest: "rgb(237, 253, 243)",
      Decorative40Weakest: "rgb(245, 240, 252)",
      Destructive: "rgb(214, 31, 31)",
      DestructiveStrong: "rgb(117, 12, 12)",
      DestructiveStronger: "rgb(74, 11, 11)",
      DestructiveStrongest: "rgb(49, 12, 12)",
      DestructiveWeak: "rgb(246, 177, 177)",
      DestructiveWeaker: "rgb(252, 207, 207)",
      DestructiveWeakest: "rgb(254, 236, 236)",
      Error: "rgb(214, 31, 31)",
      ErrorStrong: "rgb(117, 12, 12)",
      ErrorStronger: "rgb(74, 11, 11)",
      ErrorStrongest: "rgb(49, 12, 12)",
      ErrorWeakest: "rgb(254, 236, 236)",
      Inverse: "rgb(31, 48, 76)",
      InverseStrong: "rgb(57, 71, 98)",
      InverseStronger: "rgb(57, 71, 98)",
      InverseStrongest: "rgb(255, 255, 255)",
      NeutralWeakest: "rgb(235, 244, 255)",
      New: "rgb(245, 240, 252)",
      NewWeakest: "rgb(250, 247, 253)",
      Offline: "rgb(174, 178, 193)",
      Overlay: "rgba(6, 3, 58, 0.4)",
      Primary: "rgb(2, 99, 224)",
      PrimaryStrong: "rgb(0, 20, 137)",
      PrimaryStronger: "rgb(3, 11, 93)",
      PrimaryStrongest: "rgb(6, 3, 58)",
      PrimaryWeak: "rgb(153, 205, 255)",
      PrimaryWeaker: "rgb(204, 228, 255)",
      PrimaryWeakest: "rgb(235, 244, 255)",
      Required: "rgb(235, 86, 86)",
      RowStriped: "rgb(244, 244, 246)",
      Strong: "rgb(225, 227, 234)",
      Stronger: "rgb(136, 145, 170)",
      Strongest: "rgb(75, 86, 113)",
      Subaccount: "rgb(255, 251, 234)",
      Success: "rgb(20, 176, 83)",
      SuccessWeakest: "rgb(237, 253, 243)",
      Trial: "rgb(209, 250, 224)",
      Unavailable: "rgb(214, 31, 31)",
      User: "rgb(200, 175, 240)",
      Warning: "rgb(244, 124, 34)",
      WarningWeakest: "rgb(254, 245, 238)",
      Weak: "rgb(249, 249, 250)",
    },

    borderRadius: {
      0: "0px",
      10: "2px",
      20: "4px",
      30: "8px",
      circle: "50%",
      pill: "100px",
    },
    borderColor: {
      DEFAULT: "rgb(136, 145, 170)",
      Decorative10Weaker: "rgb(225, 227, 234)",
      Decorative20Weaker: "rgb(204, 228, 255)",
      Decorative30Weaker: "rgb(209, 250, 224)",
      Decorative40Weaker: "rgb(231, 220, 250)",
      Destructive: "rgb(214, 31, 31)",
      DestructiveStrong: "rgb(117, 12, 12)",
      DestructiveStronger: "rgb(74, 11, 11)",
      DestructiveStrongest: "rgb(49, 12, 12)",
      DestructiveWeak: "rgb(246, 177, 177)",
      DestructiveWeaker: "rgb(252, 207, 207)",
      DestructiveWeakest: "rgb(254, 236, 236)",
      Error: "rgb(214, 31, 31)",
      ErrorStrong: "rgb(117, 12, 12)",
      ErrorStronger: "rgb(74, 11, 11)",
      ErrorStrongest: "rgb(49, 12, 12)",
      ErrorWeak: "rgb(245, 138, 138)",
      ErrorWeaker: "rgb(252, 207, 207)",
      ErrorWeakest: "rgb(254, 236, 236)",
      Inverse: "rgb(136, 145, 170)",
      InverseStrong: "rgb(225, 227, 234)",
      InverseStronger: "rgb(244, 244, 246)",
      InverseStrongest: "rgb(255, 255, 255)",
      InverseWeaker: "rgb(57, 71, 98)",
      InverseWeakest: "rgb(31, 48, 76)",
      Neutral: "rgb(2, 99, 224)",
      NeutralWeak: "rgb(102, 179, 255)",
      NeutralWeaker: "rgb(204, 228, 255)",
      NewWeaker: "rgb(231, 220, 250)",
      Primary: "rgb(2, 99, 224)",
      PrimaryStrong: "rgb(0, 20, 137)",
      PrimaryStronger: "rgb(3, 11, 93)",
      PrimaryStrongest: "rgb(6, 3, 58)",
      PrimaryWeak: "rgb(153, 205, 255)",
      PrimaryWeaker: "rgb(204, 228, 255)",
      PrimaryWeakest: "rgb(235, 244, 255)",
      Strong: "rgb(96, 107, 133)",
      Success: "rgb(20, 176, 83)",
      SuccessWeak: "rgb(54, 213, 118)",
      SuccessWeaker: "rgb(209, 250, 224)",
      SuccessWeakest: "rgb(237, 253, 243)",
      User: "rgb(231, 220, 250)",
      Warning: "rgb(244, 124, 34)",
      WarningWeak: "rgb(255, 179, 122)",
      WarningWeaker: "rgb(253, 220, 196)",
      WarningWeakest: "rgb(254, 245, 238)",
      Weak: "rgb(202, 205, 216)",
      Weaker: "rgb(225, 227, 234)",
      Weakest: "rgb(255, 255, 255)",
    },
  },
  plugins: [],
};
export default config;
