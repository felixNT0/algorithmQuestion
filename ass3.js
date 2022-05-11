import { defaultToString } from './defaultToString';

export default class Dictionary {
	constructor(toStrFn = defaultToString) {
	this.toStrFn = toStrFn; 
	this.table = {}; 
	}
	hasKey(key){
   	return this.table[this.toStrFn(key)] != null
	}
	set(key, value){
		if(key != null && value ! null){
			const tableKey = this.toStrFn(key)
			this.table[tableKey] = new ValuePair(key, pair)
			return true
		}
		return false
	}
	
}