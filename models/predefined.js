module.exports = class Predefined {

    static getPorduct() { //Imagen pre definida de producto transformada en base 64
        var product = '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MBcAAQERQE3AAEBEUBKAAEATAm4EJgN4AmAuAAAEBIAAAAAAAAAAAAAAAAAAAAAAAAAgABAEgAAAAkAuAAAAAABcAwAAAAAMAAYEASAAWAAAABgAAAAAAAAAC4AAAQEgAAAAAAAAAAAAAAAAAAAAAAIAXAIBcAAAgCQIAkAAAAACAAEAsAAAADAAEAAAAAC4AAAAAAAABcAAAAAAAAgJAAAAAAAAAAAAAAAAAAAAAAAAIAAEAAAQBKAALAAFgCAAAAAAAYABcAAAAAFwACwAAAAAAAABYAAAAAAAAAQEgAAAAAAAAAAAAAAAAAAAAAAAEALALASBAACQIAASAAgABIAABAEgAIsBIAAAAgABIEWAWAkCAJAgCQIsBIACAJAARYABIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q==';
        return product;
    }

    static getUser() { //Imagen pre definida de usuario transformada en base 64
        var user = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAFKAUoDASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAQQFAgMI/8QAQRAAAgEDAwEEBwQIBAYDAAAAAAECAxEhBAWBBhIxQXETFCJRYZGxBzKhwRUjQkNSYnKSJFNz0RdVY2Si4YLC0v/EABgBAQEBAQEAAAAAAAAAAAAAAAADAgEE/8QAHREBAQEBAQEAAwEAAAAAAAAAACEBAhExA0FREv/aAAwDAQACEQMRAD8A/cvA4APQjTgcAApwOAAU4HAAKcDgAFOBwACnA4ABTgcAApwOAAU4HAAKcDgAFOBwACnA4ABTgcAApwOAAU4HAAKcDgAFOBwACnA4ABTgcAApwOAAUAyMgoBkZBQDIyCgGRkFAMjIKAZGQUAyMgoBkZBQDJhtRV5NJLxYKyDc0Wz7vuVnodur1Yt27fZ7Mfm7I69DoDqCqv1z0lD+qo5P8Ec9zDzdRwEr/wCHG7f8y0f9sjzP7O96im4a3RTfuvJfkP8AWf13/PSLA7lfonqainJaKlVS/wAusm/k7HL1W37joXbW6GvQ+M6bt8+4Zua55rXBhNSV1JNfAydKAZGQUAyMgoBkZBQDIyCgGRkFAMjIKAZGQUAyMgpcXABS4uAClxcAFLi4AKXFwAUuLgApcXAbSV2CgZJtm6D3HcYR1G41HoqMsqFr1ZLy7o85JLQ6B6copel09XUPx9LVeeFZGd7zGs51B9l6d3Pfp30lNU6Cdpaip9xfBfxPy+ZPdo6M2XauzUlR9arr97W9q3ku5HbpUqdCnGjRpxhCCtGMVZJe5I9k963Ws58YSSVksIWRkGWmLL3Cy9xkAYDSknGSTT70zIA4e59HbFud5y0vq9V/vKHsO/xXc+UQzeujN22hSr0V65po57dNe3FfzR/NFng1nW45uZqkFJNJp3TM3LB6o6Lpa2M9w2enGnql7U6S9mFb/aXx8fH3lftSjJwnGUZRbjKMlZxa7017yvPXqfWbjFxcA65S4uAClxcAFLi4AKXFwAUuLgApcXABSwsMjIcpYWGRkFLCwyMgpYWGRkFLCwyMgpYWGRkFLEs6B2KGtrz3jVQUqenl2KEWsOp4y47l8b+4iUpdmLla9lexbvTuh/R2yaLS/tRpKU8d8pZf4sx3vmN8Z/XSABJQAAAAAAAAAAAAACGdd9NqrTlvuhp/raa/xMUvvwX7XmvH4eRMzEoqcXGSTTVmn3NHc3xzc9UkrNXTwLHR6h2n9CbvX0UE/Qv9bQb/AMt9y4d1wjnZL5vqW5uFhYZGQ5SwsMjIKWFhkZBSwsMjIKWFhkZBSwsMjIKAAFAACgABQAAoAAUAAK+mnpesamhp/wDNqwh85IulJJWRUOww9Jvu3QaunqYN8O/5Fvk/ybVOPgACbYAAAAAAAAAAAAAAACH/AGjbequh0+5xXt6ep6OTXjCX/tL5kBLc6j0i1uxa7TeMqEmvNK6/FFRQl2oqXvVyvGxPv6yADbFAACgABQAAoAAUAAKcjkcDgFORyOBwCnI5HA4BTkcjgcApyORwOAU5HI4HAK6XTSv1Ft3+uvoy3Co+mnbqLbv9dfRluEvyfVePgADDQAAAAAAAAAAAAAAADxVgqlKdN90otfMpNR7N43+63H5Ft7z1Ftmx0nLV106tvYoQd6k35eHm8FSttylJq3ak5W913cpx81js5HI4HBROnI5HA4BTkcjgcApyORwOAU5HI4HAKcjkcDgFAACgABQAAoAAUAAKAAFdHp126g21/wDcR+jLdKe2OSjvm3Sfhqqf1LhJfk+q8/AAGGgAAAAAAAAAAAAAAMMCqOrbPqbXysvvwXygjknS6ll2uo9yf/Xt8oo5pfPiPX0AB1ygABQAAoAAUAAKAAFMjIuLgpkZFxcFMjIuLgpkZFxcFMjIuLgpkZFwCtjbpej3HRzv93UUn/5IuYpOlNRr0pK7cKkG7K9vaRdhP8inAACbYAAAAAAAAAAAAAGDIAp7e5+k3vcKif3tTU+tvyNLJ9NVV9JrNRJ37Uq1SVn327TPncvnxDd0yMi4udKZGRcXBTIyLi4KZGRcXBTIyLi4KZGRcXBQCwsHaAWFgUAsLAoBYWBQCwsCh6p0p16tOhS+/VnGEfNuy+p5sbG3VY0Nx0lefdT1FOT/ALkBbW2bVo9q0dPR6WjGMYRs5WzN+Lb8WzcAPOsAAAAAAAAAAAAAAAAAADldRbLpt522tRqUo+mjByo1EvajNLGfcVLFuUU2rN+BdlapGjRqVpd0IuT8kik01Jdtd0ryXJThjtkCwsUYoBYWBQCwsCgFhYFALCwKAWFgUyMgApkZABTIyACmRkAFMjIAKZMSTcWl32wZAKuHZtYtftOj1l81aMJPztn8TdIv9nutWo2SWkcry0lWULe6L9pfV/IlBDZq2AAOAAAAAAAAAAAAAAAADi9X6t6Pp3WzjLsyqQ9FHzk7fRsqtKyskrInX2k65R0+j22LzUqOtNfCKsvxf4EFK8ZPU+vfTIyAbZpkZABTIyACmRkAFMjIAKZGQAUA5HIKAcjkFAORyCgHI5BQDkcgoByOQVI+g9xWj3t6SpK1PW0+wrvHbjmP4XRZSKTTcWpRk04tSTTs013NMm/RfU26bjuUtu3PUxqx9C5Un2EpNxavdrvwyffP7b56/WpsACbYAAAAAAAAAAAAAGA+4g/XHUO56PcFte36v0NN0FKq4xXbu2+6XhhHcz2ObvjhdW7j+kt/1NSEr06FtPTzdWj3v+5s45hJJWRnkvmeRPd9AORyHKAcjkFAORyCgHI5BQDkcgoByOQU4HAAKcDgAFOBwACnA4ABTgcAApwOAAU4Oh07rfUN80WqbtFVVTm/5Zey/qjnhptWTs/B+4bTF3A53T+5R3bZ9NrbpzlBRqK/dNYl+KOiedYAAAAAAAAAAAAACo+ptX671Brq6d4xqeii/hFW+qZaO666G27bqdfUeKFKU/N2wvnYpxOUrym7yk+1J+9vLKcYx2cDgAoxTgcAApwOAAU4HAAKcDgAFOBwACnA4ABQDIyCgGRkFAMjIKAZGQUAyMgoBkZBQDIyCpZ9n28LS62ps9edqeqfpKN+5VEsrlK/BYRSUZThOM6c5QnBqUZRdnFruaLY6Y3WrvOz0ddXpqFRtwnbulKLs5L4Ml3zfW+N/TqgAw2AAAAAAAAAHitU9FRnV7Ll2IuVl42XcBDvtG3RRoUNmpS9qq1WrW8IL7q5f0IKffXa/UbprKu46l/rK8u014RXhFfBLB8Ml+c8xLrd3QDIydcoBkZBQDIyCgGRkFAMjIKAZGQUAyMgpcXABS4uAClxcAFLi4AKXFwAUuLgApcXABTxLR6Kp+j6Z0T8ZqU3zJlXSfZi37lctzp2g9PsWgpPDjQg/mr/AJmO/jXH10gASUAAAAAAAADzOKnFwf7SsejFs3ApKUXCU6drdiTj8nYXNndKXq+6a2g1b0eoqL/yZrHoxGlxcAFLi4AKXFwAUuLgApcXABS4uAClxcAFLCwyMhylhYZGQUsLDIyClhYZGQUsLDIyClhYZGQUsLDIyCjg6lqUcuo1Bebdi6qFJUKFOiu6nBRXCsVT0tpPXeotFRaTUJ+mlf3RV/rYton+Tf0pxkAATbAAAAAAAAAABVHV+nem6l1se5VJRqr/AOUV+aZyLEw+0jSdjWaLXK1qsJUZead19WQ/JfnfcS6ywsLDIydZpYWGRkFLCwyMgpYWGRkFLCwyMgpYWGRkFLCwyMgoAAUAAKAAFAACgABQAAoLoNpK7aSR3Onek9bvlSFavGen0HfKo1aVRe6H/wCu73XObvjuZuu19nO1zXrG81YWjNego3Xek7yl87Lhk4Pnp9PR0lCnptPSjTpUoqEIx7kl4H0I7vu+q5ngADjoAAAAAAAAAAOH1jtU922SrToQ7Veg1XpJLMnHvXKuirE00mn3l3kF6s6Mremnumy0XNVG51tPHvv4yh5+K+RvjryMdZ6hYHc3F4admnhp+5gqnQAAoAAUAAKAAFAACgABTkcjgcApyORwOAU5HI4HAKcjkcC/wBTkci5v7TsW6b3K236ZunezrT9mmufHi43fPpnutDwvc6O0dP7rvck9FpmqV816ns015P8Aa4Jrs3QW2aBxr7i/Xa6zaStTi/hHx5uSeMYxioxSSSsku5Invf8AG84/qN7N0LtW3ONfWL13ULKdRexF/CP5u5JEklZdyMgxu+/VPPAAHAAAAAAAAAAAAAAAAByN56X2je056mh2K/hXp+zPn3+TINvPRe77V2qtGD1unX7dKPtxXxj+auWgDWdbjm85qkE75TM8lqb10ntG9dqrVo+h1D/f0vZlz4S5IPvHR+87R2qsafremjn0lJe0l/NHvXFymd5qe87jh8jkwpKSusmb/A0zTkcjgcApyORwOAU5HI4HAKcjkcDgFAACgABQA+2j0Os3LUeq6DTTr1f4YrEV72+5LzBnuvibm2bPuW81Oxt2llUinaVV4px85fkiYbL9numpKOo3yotRU7/QQbVNeb75fQl9KlSo040qNONOEVaMYpJJfBIxvf8AG85/qL7P0Bt+k7NbdZLWVllQtalF+X7XPyJTCEKcVCEVGMVZJKySPQJ7vreZmAAOOgAAAAAAAAAAAAAAAAAAAAAAAAAA4e89H7RvDlWdL1fUv99SSTf9S7pEF3jpTeNmvVqUfWNOs+mopuy/mj3r6FrA1nW45vOapFNNXTTXwBZm99EbVurlqNPH1PUvPbpr2ZP+aPc/NWZAt32HdNjnbX6dejbtGvTzTlz4P4MpnWanvO40AAaZoAAUAAKZGRcXBTIbSTbdkvEJSbUYxlKUmlGMVdyb7kl4ssDpXounoVDcd3hGpqvvQpPMaP8AvL4+Hh7zO9ZjWc7ri9P9EazdFHVbk56XSvMYWtVqL/6rzyT/AEG3aHa9OtLoNNCjTXhFZb97fe35myCW7vSmZ4AA46AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAealOnVhKlVhGcJK0oyV018UegBCd++z+L7Wq2BqEu96ab9l/wBL8PJ48iE1KdSjUnQrUp06tN9mcJxtKL+KLsON1F0zot/o3l+p1UF+rrxWV8Je9fD5G878+s7z7VVZGT767QavbNVPQ66k6dan3+6S8JRfimfC5X78T33DIyLi4coO7vFjobBtP6a3ehoGn6Jv0lb/AE13rnC5G7475upV0J05GnTjv2upfrai/wANCS+5D+Pzfh8PMmhiMYwiowiopKyS7kjJDd91XM8AAcdAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxup+nqW/aFxiox1VG8qFR+D/hfwf8A7KrlGdOcqdWDhUg3GcX3xksNMu0rv7QNnWk3Cnu1GNqer9irbwqJYfK+hTjr9M9Z7iKgWFiidMk7+zjQKOn1e6SjmrNUYP8Aljl/i/wIJ7i0eiEl01pLJK/bb/uZnv47x9d0AEVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOR1Zt/6S2HVUVG86cPTU/6o5/3XJ1zzNJwkmrppnc+mqST7STXc1dGch4k0vBv6guh74//Z';
        return user;
    }

}