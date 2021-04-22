//Dependency Helper.js

class ScreenResizeManager {
    constructor(backgroundID, screenHeight) {
        this.screens = {};
        this.background = document.getElementById(backgroundID);
        this.screenHeight = screenHeight;
    }

    registerScreen(divID) {
        if (this.screens[divID]) throw new Error(`'${divID}' already exists`);

        let div = document.getElementById(divID);
        let height, width, y_margin, x_margin;
        if (div.getAttribute("style")) {
            height = Helper.removeLastCharacter(div.style.height);
            width = Helper.removeLastCharacter(div.style.width);
            y_margin = Helper.removeLastCharacter(div.style.marginTop);
            x_margin = Helper.removeLastCharacter(div.style.marginTop);
        } else {
            height = Helper.removeLastCharacter(getComputedStyle(div).height);
            width = Helper.removeLastCharacter(getComputedStyle(div).width);
            y_margin = Helper.removeLastCharacter(getComputedStyle(div).marginTop);
            x_margin = Helper.removeLastCharacter(getComputedStyle(div).marginLeft);
        }

        this.screens[divID] = [div, height, width, y_margin, x_margin];
    }

    SetScreenSizeMatchWithBG(divID) {
        const screen = this.screens[divID];
        if (!screen) this._throwErrorIfNoEvent(divID);

        const height = screen[1];
        const width = screen[2];
        const y_margin = screen[3];
        const x_margin = screen[4];
        const _xMargin = (width / 2) + x_margin;
        const tempHeight = this.background.clientHeight * height / this.screenHeight;
        const tempWidth = this.background.clientHeight * width / this.screenHeight;
        const x1 = this.background.clientHeight * y_margin / this.screenHeight;
        const x2 = (this.background.clientHeight * _xMargin / this.screenHeight) - (tempWidth / 2);
        var div = screen[0];

       // div.setAttribute("style", ("width: " + tempWidth + "px; height: " + tempHeight + "px; margin: " + x1 + "px " + x2 + "px;left:50%;top:50%;"));
        div.setAttribute("style", ("width: " + tempWidth + "px; height: " + tempHeight + "px; margin: " + x1 + "px " + x2 + "px;"));
    }

    _throwErrorIfNoEvent(screenName) {
        throw new Error(`'${screenName}' not exists!`);
    }
}
//Pass Background Image/video ID and Screen Size 1366x768 size UI
window.ScreenManager = new ScreenResizeManager('background-holder', 768);