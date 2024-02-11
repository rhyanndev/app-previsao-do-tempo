const colors = [
    //Grey Colors
    "#000000", "#1C1C1C", "#363636", "#4F4F4F", "#696969", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC",
    //Blue Colors
    "#6A5ACD", "#836FFF", "#6959CD", "#483D8B", "#191970", "#000080", "#00008B", "#0000CD", "#0000FF", "#6495ED",
    "#4169E1", "#1E90FF", "#00BFFF", "#87CEFA", "#87CEEB", "#ADD8E6", "#4682B4", "#B0C4DE", "#708090", "#778899",
    //Cyan Colors
    "#00FFFF", "#00CED1", "#40E0D0", "#48D1CC", "#20B2AA", "#008B8B", "#008080", "#7FFFD4", "#66CDAA", "#5F9EA0",
    //Green Colors
    "#2F4F4F", "#00FA9A", "#00FF7F", "#98FB98", "#90EE90", "#8FBC8F", "#3CB371", "#2E8B57", "#006400", "#008000",
    "#228B22", "#32CD32", "#00FF00", "#7CFC00", "#7FFF00", "#ADFF2F", "#9ACD32", "#6B8E23", "#556B2F", "#808000",
    //Brown Colors
    "#BDB76B", "#DAA520", "#B8860B", "#8B4513", "#A0522D", "#BC8F8F", "#CD853F", "#D2691E", "#F4A460", "#FFDEAD",
    "#F5DEB3", "#DEB887", "#D2B48C",
    //Purple Colors
    "#7B68EE", "#9370DB", "#8A2BE2", "#4B0082", "#9400D3", "#9932CC", "#BA55D3", "#A020F0", "#8B008B", "#FF00FF",
    "#EE82EE", "#DA70D6", "#DDA0DD",
    //Pink Colors
    "#C71585", "#FF1493", "#FF69B4", "#DB7093", "#FFB6C1", "#FFC0CB", "#F08080", "#CD5C5C", "#DC143C",
    //Red Colors
    "#800000", "#8B0000", "#B22222", "#A52A2A", "#FA8072", "#E9967A", "#FFA07A", "#FF7F50", "#FF6347", "#FF0000",
    //Orange Colors
    "#FF4500", "#FF8C00", "#FFA500",
    //Yellow Colors
    "#FFD700", "#FFFF00", "#F0E68C"];

    const btn = document.getElementById("btn");
    const color = document.querySelector(".color"); // A cor
    const hexInput = document.getElementById("hexadecimalInput");

    btn.addEventListener("click", () => {
        const randomNumber = getRandomNumber();

        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors [randomNumber];
    });

    //Agora vamos criar a função getRandomNumber

    getRandomNumber = () => {
        return Math.floor(Math.random()*colors.length);
    }


    //Adiconando ouvinte de evento para a tecla "Enter" no input

    hexInput.addEventListener("keydown", function(event){

        if(event.key  === "Enter")
        {
            changeColor();
        }

    });


    function changeColor(){

        //trim

        inputHex = hexInput.value.trim();

        if(isValidHex(inputHex)) {
            document.body.style.backgroundColor = inputHex;

            color.textContent = inputHex;

        }
        else{
            alert("Digite um valor hexadecimal de cor válido!");
        }
    }

    function isValidHex(hex) {
        // Verifica se o valor inserido é um código hexadecimal válido
      const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
      return hexRegex.test(hex);
    }