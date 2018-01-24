class pixelArtMaker {
    
    constructor(width, height) {
        this.width = Number(width);
        this.height = Number(height);
        this._pickedColor;
        this.init();
    }

    get pickedColor() {
        return this._pickedColor;
    }

    set pickedColor(color) {
        this._pickedColor = color;
    }

    init() {    
        if(this.height){
             $('#input_height').val(this.height);
        }
        if(this.width){
            $('#input_width').val(this.width);
        }
        this.pickedColor = $('#colorPicker').val();
        this.makeGrid();
        this.eventListeners();
    }

    makeGrid() {
        for(let i = 0; i < this.width; i++) {
            var tr = $("<tr class='row row-"+ i + "'/>");
            for(let j = 0; j < this.height; j++) {
                tr.append( "<td class='square square-"+ j+"' />");
            }
            $('#pixel_canvas').append(tr);
        }
    }

    eventListeners() {
        $('#pixel_canvas').on('click', 'td', function() {       
            console.log($('#colorPicker').val());
            $(this).toggleClass('selected');       
        
            if($(this).hasClass('selected')) {
                $(this).css('background-color', $('#colorPicker').val());
            } 
            else {
                $(this).css('background-color', '');
            }
        });

        $('#colorPicker').on('change', function() {
            this.pickedColor = $(this).val();
            $('.selected').css('background-color', this.pickedColor);
        });
    }
}

class PixelArtUtility {
    constructor() {}

    static getUrlVars() {
        let vars = [], hash;
        let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(let i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
}

$(function() { 
    let utility = PixelArtUtility.getUrlVars();
    let pixelArt = new pixelArtMaker(utility.width, utility.height);
});

