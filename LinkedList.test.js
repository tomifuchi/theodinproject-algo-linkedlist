const {LinkedList} = require('./LinkedList');

//Basic functionality, we can get more complicated 
//if we wanted to, if we wanted to ensured that it's absolutely without a shadow of
//doubt that this will work. But yeah, this is only a simple implementation.
describe('LinkedList', () => {
    	let list;

    	beforeEach(() => {
    		list = new LinkedList();
    	});

	it('append adds value to the end of the list', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);

	    expect(list.size()).toBe(3);
	    expect(list.at(0).value).toBe(1);
	    expect(list.at(1).value).toBe(2);
	    expect(list.at(2).value).toBe(3);
	});

	it('prepend adds value to the beginning of the list', () => {
	    list.prepend(1);
	    list.prepend(2);
	    list.prepend(3);
	    
	    expect(list.size()).toBe(3);
	    expect(list.at(0).value).toBe(3);
	    expect(list.at(1).value).toBe(2);
	    expect(list.at(2).value).toBe(1);
	});

	it('pop removes and returns the last value in the list', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    list.pop();
	    
	    expect(list.size()).toBe(2);
	    expect(list.at(0).value).toBe(1);
	    expect(list.at(1).value).toBe(2);
	    
	    const value = list.pop();
	    expect(value).toBe(2);
	});

	it('pop removes and returns the last value in the list, if the list only has 1 value', () => {
	    list.append(1);
	    const val = list.pop();
	    expect(list.size()).toBe(0);
	    expect(list.at(0)).toBe(null);
	    expect(list.head).toBe(null);
	});

	it('insertAt inserts value at the specified index', () => {
	    //Should build 1 -> 7 -> 2 -> 4 -> 3 -> null
	    list.insertAt(1, 0);
	    list.insertAt(2, 1);
	    list.insertAt(3, 2); 
	
	    list.insertAt(7, 1);
	    list.insertAt(4, 3);

	    console.log(list.toString())
	    list.insertAt(9, -20); //should not work
	    list.insertAt(8, -1); //should not work
	    list.insertAt(9, 6); //should not work
	    list.insertAt(-3, 7); //should not work
	    list.insertAt(-9, 8); //should not work


	    expect(list.at(0).value).toBe(1);
	    expect(list.at(1).value).toBe(7);
	    expect(list.at(2).value).toBe(2);
	    expect(list.at(3).value).toBe(4);
	    expect(list.at(4).value).toBe(3);
	})

	it('insertAt inserts value in empty list', () => {
	    list.insertAt(5, 0);
	    expect(list.at(0).value).toBe(5);
	})

	it('removeAt removes and returns the value at the specified index', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    list.append(4);
	    list.append(5);

	    expect(list.removeAt(0)).toBe(1);
	    expect(list.removeAt(2)).toBe(4);
	    expect(list.size()).toBe(3);
	    
	    console.log(list.toString());
	    //Should not do anything
	    list.removeAt(4);
	    list.removeAt(-1);
	    list.removeAt(-90);
	    list.removeAt(3);

	    expect(list.at(0).value).toBe(2);
	    expect(list.at(1).value).toBe(3);
	    expect(list.at(2).value).toBe(5);
	});

	it('isEmpty returns true if the list is empty', () => {
	    expect(list.isEmpty()).toBe(true);
	});

	it('size returns the number of values in the list', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    
	    expect(list.size()).toBe(3);
	    list.pop();
	    expect(list.size()).toBe(2);
	});

	it('tail returns the last value in the list', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    
	    expect(list.tail().value).toBe(3);
	});

	it('at returns the value at the specified index', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    
	    expect(list.at(0).value).toBe(1);
	    expect(list.at(0)).toBe(list.head);
	    expect(list.at(1).value).toBe(2);
	    expect(list.at(2).value).toBe(3);
	});

	it('contains returns true if the value is in the list', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    expect(list.contains(2)).toBe(true);
	    expect(list.contains(4)).toBe(false);
	});

	it('find the index of the node containing the value, null if not found', () => {
	    list.append(1);
	    list.append(2);
	    list.append(3);
	    list.append(4);
	    
	    expect(list.find(3)).toBe(2);
	    expect(list.find(5)).toBe(null);
	});
});
