<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="border-radius: 16px;">
                        <div class="well profile col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <figure>
                                    <img src="/assets/images/users/user-6.jpg"
                                         alt="" class="img-circle" style="width:75px;" id="user-img">
                                </figure>
                                <h5 style="text-align:center;"><strong id="user-name">Admin</strong></h5>
                                <p style="text-align:center;font-size: smaller;" id="user-frid">FBT000000213 </p>
                                <p style="text-align:center;font-size: smaller;overflow-wrap: break-word;"
                                   id="user-email">TsapalAdmin1@gmail.com </p>
                                <p style="text-align:center;font-size: smaller;"><strong>A/C status: </strong><span
                                        class="tags" id="user-status">Active</span></p>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                <p style="text-align:center;font-size: smaller;"><strong>Job role</strong></p>
                                <p style="text-align:center;font-size: smaller;" id="user-role">Admin</p>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 divider text-center"></div>
                                <div class="col-lg-6 left" style="text-align:center;overflow-wrap: break-word;">
                                    <h4><p style="text-align: center;"><strong id="user-globe-rank">245 </strong></p>
                                    </h4>
                                    <p><small class="label label-success">Task to do</small></p>
                                </div>
                                <div class=" col-lg-6 left" style="text-align:center;overflow-wrap: break-word;">
                                    <h4><p style="text-align: center;"><strong id="user-college-rank">245 </strong></p>
                                    </h4>
                                    <p><small class="label label-warning">Notification</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'profile'
}
</script>
<style>
    .profile {
        font-family: 'Lato', 'sans-serif';
    }

    .profile {
        /*    height: 321px;
            width: 265px;*/
        margin-top: 2px;
        padding: 1px;
        display: inline-block;
    }

    .divider {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .emphasis {
        border-top: 1px solid transparent;
    }

    .emphasis h2 {
        margin-bottom: 0;
    }

    span.tags {
        background: #1abc9c;
        border-radius: 2px;
        color: #f5f5f5;
        font-weight: bold;
        padding: 2px 4px;
    }

    .profile strong, span, div {
        text-transform: initial;
    }
</style>
