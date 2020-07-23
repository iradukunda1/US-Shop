<template>
    <div class="comment-modal">
        <b-modal
                id="create-comment"
                v-model="show"
                no-close-on-backdrop
                hide-footer
                @close="close"
        >
            <template v-slot:modal-header>
                <header class="d-flex justify-content-between align-items-center w-100">
                    <h5 class="text-capitalize ">
                        Make Comment on <b>{{ product.name }} </b>
                    </h5>
                    <i class="fa fa-times" style=" cursor:pointer" @click="close()" />
                </header>
            </template>
            <div class="wrapper">
                <form>
                    <div class="col-lg-12">
                        <label for="comment" class="col-lg-4">Content</label>
                        <div class=" col-lg-8">
              <textarea
                      id="comment"
                      v-model="content.comment"
                      class="form-control"
                      placeholder="enter your comment"
              ></textarea>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <label for="name" class="col-lg-4">Rating</label>
                        <div class="col-md-8">
                            <input
                                    id="name"
                                    v-model="content.rating"
                                    class="form-control"
                                    type="text"
                                    placeholder="enter your ratings"
                            />
                        </div>
                    </div>
                </form>
                <b-row align-h="between" class="p-4">
                    <b-col cols="4">
                        <b-button
                                block
                                variant="primary"
                                @click="createComment"
                                :disabled="loading"
                                class="footer-btn"
                        ><b-spinner v-if="loading" small></b-spinner>
                            <span v-else>comment</span></b-button
                        ></b-col
                    >
                    <b-col cols="4"
                    ><b-button variant="danger" @click="close" class="footer-btn btn"
                    > cancel </b-button
                    ></b-col
                    >
                </b-row>
            </div>
        </b-modal>
    </div>
</template>
<script>
    /* eslint-disable */
    import axios from "axios";
    export default {
        props: {
            comment: Object,
            show:Boolean
        },
        data() {
            return {
                loading: false,
                product: {},
                content:{}
            };
        },
        methods: {
            close() {
                this.$emit("close");
                this.product = {};
            },
            createComment() {
                // axios
                //     .post(`${process.env.VUE_APP_BASE_URL}/products/by_id/+this.product.id +/comments`, this.content)
                //     .then(response => {
                //         this.$emit('reloadProduct')
                //         this.close = "modal"
                //     })
                //     .catch(error => {
                //         console.log(error)
                //     })
                // console.log(this.comment)
            }
        },
        mounted() {
            return (this.product = { ...this.comment });
        }
    };
</script>
<style scoped>
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.5s ease;
    }

    .slide-fade-enter,
    .slide-fade-leave-to,
    .slide-fade-leave-active {
        transform: translateY(-100%);
        opacity: 0;
    }
</style>
