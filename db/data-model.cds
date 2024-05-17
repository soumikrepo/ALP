namespace my.bookshop;

using {cuid} from '@sap/cds/common';


entity Books : cuid {

    title       : String  @title: 'Title';
    stock       : Integer @title: 'Stock';
    category1   : String  @title: 'Category1';
    category2   : String  @title: 'Category2';
    publishedAt : Date    @title: 'Published At';
}
