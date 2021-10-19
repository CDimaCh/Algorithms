class Node {
    constuctor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constuctor() {
        this.root = null;
    }

    insert (val) {
        let newNode = new Node(val);

        if(this.root === null) {
            this.root === newNode;

            return this;
        } else {
            let current = this.root;

            while(true) {
                if(val === current.val) return undefined;

                if(val < current.val) {
                    if(current.left === null) {
                        current.left = newNode;

                        return this;
                    } else {
                        current = current.left;
                    } 
                } else if (val > current.val) {
                    if(current.right === null) {
                        current.right = newNode;

                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(val) {
        if(this.root === null) return undefined;

        let current = this.root;
        let found = false;

        while(current && !found) {
            if(val < current.val) {
                current = current.left;
            } else if (val > current.right) {
                current = current.right;
            } else {
                found = true;
            }
        }

        if(!found) return undefined;
    
        return current;
    }
}

let tree = new BinarySearchTree();

//tree.inset(10)


//tree.root = new Node(10);
//tree.root.left = new Node(15);
//tree.root.right = new Node(7);
//tree.root.left.right = new Node(9);