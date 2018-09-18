function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#source1')
                    .attr('xlink:href', e.target.result)
                    .width(e.target.width)
                    .height(e.target.height);
                $('#source2')
                    .attr('xlink:href', e.target.result)
                    .width(e.target.width)
                    .height(e.target.height);
                $('#source3')
                    .attr('xlink:href', e.target.result)
                    .width(e.target.width)
                    .height(e.target.height);
            };

            reader.readAsDataURL(input.files[0]);

            setTimeout(function(){
                saveSvgAsPng(document.getElementById("whole"), "whole.png");
            }, 0);


        }
    }