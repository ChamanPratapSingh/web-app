
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'uxpipe'
})

export class UxPipe implements PipeTransform{

    transform(str:any) {
        
        let first = str.substr(0,1).toUpperCase();
        return first + str.substr(1); 

          
        }

    }

