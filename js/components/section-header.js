class SectionHeader extends Component {
  render() {
    let headertext = this.props.headertext;
    return (
      <section class="background--skyBlue section">
        <h2 class="color--cloud margin--none section__text--centered">
          About Me
        </h2>
      </section>
    );
  }
}

export default SectionHeader;
