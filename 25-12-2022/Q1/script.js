const slide=document.getElementById('categories_list');
            
            function scrollAnimation() {
                let count = 0
                let flag = true
                setInterval(() => {
                    const endPoint = slide.scrollWidth;
                    if (flag) {
                        count += 1
                        if (count === endPoint) {
                            flag = false
                        }
                    } else {
                        count -= 1
                        if (count === 0) {
                            flag = true
                        }
                    }
                    slide.scrollTo(count, 0)
                }, 10)
            }

            scrollAnimation();