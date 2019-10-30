function Tree() {
    this.root = null;
}

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}

Tree.prototype = {
    //二叉树插入
    insert: function(data) {
        var node = new Node(data, null, null);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        let parent = null;
        while (current) {
            parent = current;
            if (data < current.data) {
                current = parent.left;
                if (!current) {
                    parent.left = node;
                    return;
                }
            } else {
                current = current.right;
                if (!current) {
                    parent.right = node;
                    return
                }
            }
        }
    },
    inorderTraversal:function(root) {
        const result = [];
        const stack = [];
        let current = root;
        while (current || stack.length > 0) {
            while (current) {
                stack.push(current);
                current = current.left;
            }
            current = stack.pop();
            result.push(current.val);
            current = current.right;
        }
        return result;
    }
    
}

let tree = new Tree()
tree.insert(10);