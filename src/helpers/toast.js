class ToastHelper {
  constructor() {}

  get componentVue() {
    return this._componentVue;
  }

  set componentVue(comp) {
    this._componentVue = comp;
  }

  configure(comp) {
    this._componentVue = comp;
  }

  successMessage(text) {
    this.componentVue.$bvToast.toast(text, {
      variant: "success",
      solid: true
    });
  }

  dangerMessage(text) {
    this.componentVue.$bvToast.toast(text, {
      variant: "danger",
      solid: true
    });
  }

  warningMessage(text) {
    this.componentVue.$bvToast.toast(text, {
      variant: "warning",
      solid: true
    });
  }
}

export default new ToastHelper();
