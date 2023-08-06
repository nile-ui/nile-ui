import React from 'react';
import defaultVariables from '../variables';
var NileThemeContext = React.createContext({});
var NileThemeProvider = function (_a) {
    var children = _a.children, theme = _a.theme;
    var themeValues = React.useMemo(function () { return Object.assign({}, defaultVariables, theme); }, [theme]);
    return React.createElement(NileThemeContext.Provider, { value: themeValues }, children);
};
export default NileThemeProvider;
export var useNileTheme = function () { return React.useContext(NileThemeContext); };
//# sourceMappingURL=NileThemeContextForAppRouter.js.map