import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

  transform(pipeData: Array<object | number>, pipeModifier: string): Array<any> {
    return pipeData.filter(eachItem => {
      return (
        eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) || 
        eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase()) 
      )
    });
  }

}
