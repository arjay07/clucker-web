import {Observable} from 'rxjs';
import {Page, PageParams} from '@models/page';
import {Cluck} from '@models/cluck';

export type CluckLoaderFunction = (params?: PageParams) => Observable<Page<Cluck>>;
