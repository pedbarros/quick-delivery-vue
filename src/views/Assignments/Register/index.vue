<template>
  <section class="d-flex flex-column delivery-container">
    <div class="d-flex flex-column flex-lg-row justify-content-between">
      <div>
        <h4>Cadastro de encomendas</h4>
      </div>
      <div>
        <b-button
          class="mt-3 mr-2 mt-sm-0 text-white "
          variant="secondary"
          @click="$router.back()"
        >
          <b-icon-plus></b-icon-plus>
          VOLTAR
        </b-button>
        <b-button
          class="mt-3 mt-sm-0"
          variant="primary"
          @click="saveAssignment"
        >
          <b-icon-plus></b-icon-plus>
          SALVAR
        </b-button>
      </div>
    </div>

    <div class="card register-card w-100 align-self-center mt-3 p-3 p-sm-4">
      <b-form>
        <div class="d-flex flex-column flex-lg-row flex-wrap">
          <b-form-group
            class="text-dark font-weight-bold mr-2 flex-grow-1"
            label="Destinatário"
            label-for="input-destinatario"
          >
            <b-form-select
              v-model="form.recipient_id"
              :options="optionsRecipients"
            >
            </b-form-select>
          </b-form-group>

          <b-form-group
            class="text-dark font-weight-bold flex-grow-1"
            label="Entregador"
            label-for="input-numero"
          >
            <b-form-select
              v-model="form.delivery_man_id"
              :options="optionsDeliveryMan"
            >
            </b-form-select>
          </b-form-group>
        </div>

        <b-form-group
          class="text-dark font-weight-bold"
          label="Nome do produto"
          label-for="input-produto"
        >
          <b-form-input
            id="input-produto"
            v-model="form.product_name"
            required
            placeholder="Yamaha SX7"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </div>
  </section>
</template>

<script>
import {
  recipientService,
  delivererService,
  assignmentService
} from "@/services";
export default {
  name: "RegisterAssignment",
  data() {
    return {
      form: {
        recipient_id: 1,
        delivery_man_id: 1,
        product_name: null
      },
      optionsRecipients: [],
      optionsDeliveryMan: []
    };
  },
  methods: {
    async saveAssignment() {
      const res = await assignmentService.create(this.form);
      if (res) this.$router.push({ name: "ListAssignments" });
    }
  },
  async mounted() {
    this.optionsRecipients = (await recipientService.get()).map(item => ({
      value: item.id,
      text: item.name
    }));
    this.optionsDeliveryMan = (await delivererService.get()).map(item => ({
      value: item.id,
      text: item.name
    }));
  }
};
</script>

<style lang="scss" scoped>
.delivery-container {
  width: 65%;
  margin: 0 auto;

  @media (max-width: 604px) {
    width: 90%;
    height: 100%;
  }
  .image-upload {
    width: 150px;
    height: 150px;
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px dashed #dddddd;
  }
  .register-card {
    border-radius: 4px;
  }
}
</style>
