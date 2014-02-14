function createDot(ctx, x, y){
        ctx.fillRect(x, y, 1, 1);
    }
    function saveC(c) {
        var dataURL = c.toDataURL();
        var a = document.createElement('a');
        a.href = dataURL;
        a.setAttribute("download","myimage.png");
        a.click();
    }


    var c  = document.getElementById('my-draw');
    var ctx = c.getContext('2d');
    var msdn = false;

    c.addEventListener('mousedown', function(e){
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        msdn = true;
    });
    document.addEventListener('mouseup', function(e){
        msdn = false;
    });

    c.addEventListener('mousemove', function(e){
        if(msdn){
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    var lis = document.querySelectorAll('.box ul li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click', function(){
            var color = this.getAttribute("data-color");
            if(color) ctx.strokeStyle = color;

            var strockW = this.getAttribute("data-linewidth");
            if(strockW) ctx.lineWidth = strockW;
        });
    };
    document.querySelector('.reset').addEventListener('click', function(e){
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, c.width, c.height);
    });
    document.querySelector('.save').addEventListener('click', function(e){
        saveC(c);
    });

