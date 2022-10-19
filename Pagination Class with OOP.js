/* 
Your task is to create a class to handle paginated content in a website. A pagination is used to divide long lists of content in a series of pages.

Example

The pagination class will accept 2 parameters:

items (default: []): An array of contents to paginate.

pageSize (default: 10): The amount of items to show in each page.

So for example we could initialize our pagination like this:

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const p = new Pagination(alphabetArray, 4);
And then use the method getVisibleItems to show the contents of the paginated array.

console.log(p.getVisibleItems()); // ["a", "b", "c", "d"]
You will have to implement various methods to go through the pages such as:

prevPage
nextPage
firstPage
lastPage
goToPage
Here's a continuation of the example above using nextPage and lastPage:

p.nextPage();

console.log(p.getVisibleItems());
// ["e", "f", "g", "h"]

p.lastPage();

console.log(p.getVisibleItems());
// ["y", "z"]
Notes
You don't have to use ES6 class if you don't want to
The second argument (pageSize) could be a float, in that case just convert it to an int (this is also the case for the goToPage method)
The methods used to change page should be chainable, so you can call them one after the other like this: p.nextPage().nextPage();
Please remove the comments I provided before publishing your solution.
*/

class Pagination {
    constructor(items = [], pageSize = 10) {
      this.items = items;       
      this.pageSize = pageSize;    
      this.totalPages = (items.length !== 0) ? Math.ceil(items.length/pageSize) : 1;  
      this.currentPage = 1;
    }

    prevPage() {
        if(this.currentPage !== 1)
            this.currentPage--;
        return this
    }

    nextPage() {
        if(this.currentPage !== this.totalPages)
            this.currentPage++;
        return this
    }

    firstPage() {
        this.currentPage = 1;
        return this
    }

    lastPage() {
        this.currentPage = this.totalPages;
        return this
    }

    goToPage(page) {
        if(page >= 1 && page <= this.totalPages) this.currentPage = page;
        else if(page <1) this.currentPage = 1
        else this.currentPage = this.totalPages
        
        return this
    }

    getVisibleItems() {
        let i=(this.currentPage-1)*this.pageSize;
        let k=i+this.pageSize;

        return this.items.slice(i,k)
    }
}
