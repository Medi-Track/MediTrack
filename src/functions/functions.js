import zlib from "zlib";
import Buffer  from ('buffer').Buffer;

export const compressor = () => {


var input = new Buffer('lorem ipsum dolor sit amet');
var compressed = zlib.deflate(input);
var output = zlib.inflate(compressed);

console.log(output.toString());

};
