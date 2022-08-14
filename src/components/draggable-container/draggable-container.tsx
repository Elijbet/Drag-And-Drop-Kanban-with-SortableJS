import { Component, Host, h, Prop } from '@stencil/core';
import Sortable from 'sortablejs';

@Component({
  tag: 'draggable-container',
  styleUrl: 'draggable-container.css',

  /* Because shadow DOM provides both style and DOM encapsulation, Sortable isn’t able to reach in and manipulate the DOM nodes in our component.

  Scoped CSS is a proxy for style encapsulation. It works by appending a data attribute to your styles to make them unique and thereby scope them to your component. It does not, however, prevent styles from the light DOM from seeping into your component. */

  scoped: true,
})
export class DragAndDropContainer {
  @Prop() containerTitle: string;
  @Prop() group: string;

  private container: HTMLElement;

  /* wait for ref to be assigned in our render method */
  componentDidLoad() {
    /* Sortable.create('id_of_container',[options]); */
    Sortable.create(this.container, {
      animation: 150,
      /* Draggable-containers that have the same group will be able to share elements. Our example are all labelled 'kanban' */
      group: this.group,
      /* Class name for the drop placeholder */
      ghostClass: 'ghost',
    });
  }
  /* make a reference draggable area for Sortable to use, with a slot to include container's children */
  render() {
    return (
      <Host>
        <h1>{this.containerTitle}</h1>
        <div ref={el => (this.container = el as HTMLElement)}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
