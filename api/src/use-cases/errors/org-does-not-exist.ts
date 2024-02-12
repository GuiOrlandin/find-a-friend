export class OrgDoesNotExistError extends Error {
  constructor() {
    super("Org does not exist");
  }
}
