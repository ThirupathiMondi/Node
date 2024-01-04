class roleemp {
  constructor(role) {
    this.role = role;
  }
  getRole() {
    console.log(this.role);
  }
}

class emp extends roleemp {
  constructor(ename, eid, erole) {
    super(erole);
    this.ename = ename;
    this.eid = eid;
  }
  getName() {
    console.log(this.ename);
  }
  getId() {
    console.log(this.eid);
  }
}
var a = new emp("hi", "hello", "bye");
a.getId();
a.getRole();
a.getName();
