using { my.bookshop as my } from '../db/data-model';

@path :'/MyService'
service MyService {

     entity books as projection on my.Books;

}
