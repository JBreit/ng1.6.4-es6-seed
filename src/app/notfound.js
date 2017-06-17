class NotFoundController {
  contructor() {
    this.name = '404';
  }
}

const NotFound = {
  url: '/404',
  template: `
    <article>
      <h1>404 Not Found</h1>
    </article>
  `,
  controller: NotFoundController,
  restricted: false,
};

export default NotFound;
