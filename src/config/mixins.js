export default {
  install(Vue) {
    Vue.mixin({
      data() {
        return {
          processing: false,
          cloudinary: {
            preset: "tsapal-upload-preset",
            name: "tsapal-online"
          },
          uploadProgress: 0
        };
      },
      methods: {
        loader(bool, data) {
          this.$store.dispatch("setAccessories", ["loading", bool ? data : {}]);
          this.processing = bool;
        },
        uploadImage(file, tags) {
          var xhr = new XMLHttpRequest();
          return new Promise((resolve, reject) => {
            var url = `https://api.cloudinary.com/v1_1/${this.cloudinary.name}/upload`;
            var fd = new FormData();
            fd.append("file", file);
            fd.append("upload_preset", this.cloudinary.preset);
            fd.append("cloud_name", this.cloudinary.name);
            fd.append("tags", tags);

            xhr.upload.addEventListener("progress", function(e) {
              this.uploadProgress = Math.round((e.loaded * 100.0) / e.total);
            });

            xhr.onreadystatechange = function() {
              if (xhr.readyState !== 4) return;
              if (xhr.status >= 200 && xhr.status < 300) {
                var { secure_url } = JSON.parse(xhr.responseText);
                resolve(secure_url);
              } else
                reject({
                  status: xhr.status,
                  message: xhr.statusText
                });
            };
            xhr.open("POST", url, true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(fd);
          });
        },
        modalAlert(bool, data) {
          if (bool) {
            this.$bvModal.show("modal-alert");
            this.$store.dispatch("setAccessories", ["modalAlert", data]);
          } else {
            this.$bvModal.hide("modal-alert");
            this.$store.dispatch("setAccessories", ["modalAlert", {}]);
          }
        },
        getError(err) {
          return (
            err &&
            ((typeof err.error === "object" && err.error.message) ||
              (typeof err.error === "string" && err.error) ||
              err.message ||
              (typeof err === "string" && err))
          );
        }
      }
    });
  }
};
