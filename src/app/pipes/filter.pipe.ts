import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return Object.keys(item).some(key => {
        if (typeof item[key] === 'string') {
          return item[key].toLowerCase().includes(searchText);
        }
        if (Array.isArray(item[key])) {
          return item[key].some((subItem: string) => subItem.toLowerCase().includes(searchText));
        }
        return false;
      });
    });
  }
}
