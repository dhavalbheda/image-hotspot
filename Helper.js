class Helper {
    static createElement(tag, className) {
        const elem = document.createElement(tag);
        elem.className = className;
        elem.id = className;
        return elem;
    }

    static detachFromParent(dom) {
        if (dom.parentNode) dom.parentNode.removeChild(dom);
    }

    static convertTextToDom(htmlText) {
        const template = document.createElement('template');
        template.innerHTML = htmlText;
        return template.content;
    }

    static removeLastCharacter(str) {
        str = str.substring(0, str.length - 2);
        return parseFloat(str);
    }

    static SetScreenSizeMatchWithBG(background_image, div, _height) {

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

        const _xMargin = (width / 2) + x_margin;
        const tempHeight = background_image.clientHeight * height / _height;
        const tempWidth = background_image.clientHeight * width / _height;
        const x1 = background_image.clientHeight * y_margin / _height;
        const x2 = (background_image.clientHeight * _xMargin / _height) - (tempWidth / 2);
        div.setAttribute("style", ("width: " + tempWidth + "px; height: " + tempHeight + "px; margin: " + x1 + "px " + x2 + "px;left:50%;top:50%;"));
    }
}

