/**
 * https://tailwindcss.com/docs/configuration#core-plugins
 * https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/config.full.js#L7
 * https://tailwindcss.com/docs/theme
 * 
 */

const mappings: {[key: string]: string} = {
    // BG
    colorBackground: "bg",
    colorBackgroundAvailable: "bg-Available",
    colorBackgroundBody: "rgb(255, 255, 255)",
    colorBackgroundBodyInverse: "rgb(18, 28, 45)",
    colorBackgroundBrand: "rgb(0, 20, 137)",
    colorBackgroundBrandHighlight: "rgb(242, 47, 70)",
    colorBackgroundBrandHighlightWeakest: "rgba(242, 47, 70, 0.1)",
    colorBackgroundBrandStrong: "rgb(3, 11, 93)",
    colorBackgroundBrandStronger: "rgb(6, 3, 58)",
    colorBackgroundBusy: "rgb(244, 124, 34)",
    colorBackgroundDecorative10Weakest: "rgb(244, 244, 246)",
    colorBackgroundDecorative20Weakest: "rgb(235, 244, 255)",
    colorBackgroundDecorative30Weakest: "rgb(237, 253, 243)",
    colorBackgroundDecorative40Weakest: "rgb(245, 240, 252)",
    colorBackgroundDestructive: "rgb(214, 31, 31)",
    colorBackgroundDestructiveStrong: "rgb(117, 12, 12)",
    colorBackgroundDestructiveStronger: "rgb(74, 11, 11)",
    colorBackgroundDestructiveStrongest: "rgb(49, 12, 12)",
    colorBackgroundDestructiveWeak: "rgb(246, 177, 177)",
    colorBackgroundDestructiveWeaker: "rgb(252, 207, 207)",
    colorBackgroundDestructiveWeakest: "rgb(254, 236, 236)",
    colorBackgroundError: "rgb(214, 31, 31)",
    colorBackgroundErrorStrong: "rgb(117, 12, 12)",
    colorBackgroundErrorStronger: "rgb(74, 11, 11)",
    colorBackgroundErrorStrongest: "rgb(49, 12, 12)",
    colorBackgroundErrorWeakest: "rgb(254, 236, 236)",
    colorBackgroundInverse: "rgb(31, 48, 76)",
    colorBackgroundInverseStrong: "rgb(57, 71, 98)",
    colorBackgroundInverseStronger: "rgb(57, 71, 98)",
    colorBackgroundInverseStrongest: "rgb(255, 255, 255)",
    colorBackgroundNeutralWeakest: "rgb(235, 244, 255)",
    colorBackgroundNew: "rgb(245, 240, 252)",
    colorBackgroundNewWeakest: "rgb(250, 247, 253)",
    colorBackgroundOffline: "rgb(174, 178, 193)",
    colorBackgroundOverlay: "rgba(6, 3, 58, 0.4)",
    colorBackgroundPrimary: "bg-Primary",
    colorBackgroundPrimaryStrong: "rgb(0, 20, 137)",
    colorBackgroundPrimaryStronger: "rgb(3, 11, 93)",
    colorBackgroundPrimaryStrongest: "rgb(6, 3, 58)",
    colorBackgroundPrimaryWeak: "rgb(153, 205, 255)",
    colorBackgroundPrimaryWeaker: "rgb(204, 228, 255)",
    colorBackgroundPrimaryWeakest: "rgb(235, 244, 255)",
    colorBackgroundRequired: "rgb(235, 86, 86)",
    colorBackgroundRowStriped: "rgb(244, 244, 246)",
    colorBackgroundStrong: "rgb(225, 227, 234)",
    colorBackgroundStronger: "rgb(136, 145, 170)",
    colorBackgroundStrongest: "rgb(75, 86, 113)",
    colorBackgroundSubaccount: "rgb(255, 251, 234)",
    colorBackgroundSuccess: "rgb(20, 176, 83)",
    colorBackgroundSuccessWeakest: "rgb(237, 253, 243)",
    colorBackgroundTrial: "rgb(209, 250, 224)",
    colorBackgroundUnavailable: "rgb(214, 31, 31)",
    colorBackgroundUser: "rgb(200, 175, 240)",
    colorBackgroundWarning: "rgb(244, 124, 34)",
    colorBackgroundWarningWeakest: "rgb(254, 245, 238)",
    colorBackgroundWeak: "rgb(249, 249, 250)",

    // Radii
    borderRadius0: 'rounded-0',
    borderRadius10: 'rounded-10',
    borderRadius20: 'rounded-20',
    borderRadius30: 'rounded-30',
    borderRadiusCircle: 'rounded-circle',
    borderRadiusPill: 'rounded-pill',
}

type BoxProps = {
    children: React.ReactNode;
    backgroundColor?: string;
    borderRadius?: string;
    _hover?: {
        backgroundColor?: string;
        borderRadius?: string
    }
}
export const Box: React.FC<BoxProps> = ({backgroundColor = '', borderRadius = '', children, _hover}) => {
    const pseudoClasses = _hover ? Object.keys(_hover).map((token: string) => `hover:${mappings[_hover[token]]}`) : [];

    return (
        <div className={` ${mappings[borderRadius]} ${mappings[backgroundColor]}  ${pseudoClasses.join(' ')}`}>{children}</div>
    )
}