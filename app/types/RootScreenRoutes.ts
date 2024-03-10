import { book } from "./api.Book";

export type RootScreenRoutesT = {
    Home: undefined;
    BookDetails: { book: book };
};