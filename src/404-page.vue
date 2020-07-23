<template>
    <div class="container">
        <div class="row" style="margin-top: 175px">
            <div class="col-md-12">
                <div class="error-template">
                    <h1>
                        Oops!</h1>
                    <h2>
                        404 Not Found</h2>
                    <div class="error-details">
                        Sorry, an error has occured, Requested page not found!
                    </div>
                    <div class="error-actions">
                        <router-link to="/" class="btn btn-primary btn-lg"><span
                                class="glyphicon glyphicon-home"></span>
                            Take Me Home
                        </router-link>
                        <router-link :to="{name:'Contact Us'}" class="btn btn-default btn-lg"><span
                                class="glyphicon glyphicon-envelope"></span> Contact Support
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
  name: '404-page'
}
</script>

<style scoped>
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-actions {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .error-actions .btn {
        margin-right: 10px;
    }
</style>
