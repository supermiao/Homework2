
function diskDiv(disk){
    return $("<div>")
        .attr("class","disk1")
        .append(diskTittle(disk.name))
        .append(diskImg(disk.img))
        .append(diskDesc(disk.desc))
        .append(removeButton(disk.name))
        .append(editButton(disk.name))

}

function con(disks){
    $("#container").empty();
    var diskDivs= map(disks,function(disk){
        return diskDiv(disk);

    })
    _.each(diskDivs,function(div){
        $("#container").append(div)
    })
}

function diskTittle(tittle){
    return $("<h3>").html(tittle);
}

function diskImg(img){
    return $("<img>").attr("src",img);
}

function diskDesc(desc){
    return $("<p>").html(desc);
}

// 删除按钮
function removeButton(tittle){
    return $("<button>").html("remove")
    .click(function(){
        remove(tittle)});
}

// 编辑按钮
function editButton(tittle){
    return $("<button>").html("edit")
    .click(function(){
        edit(tittle)});
}

// 删除按钮响应事件
function remove(tittle){
    var result = filter(disks, function(disk){
        return disk.name != tittle;
    });
    // 将disks更新
    $("#disks").empty();
    disks = result;
    con(result);
}

// 编辑按钮响应事件
function edit(tittle){
    var editOne = filter(disks, function(disk){
        return disk.name == tittle;
    })
    if (editOne.length != 1) {
        alert("商品名不唯一！");
    };
    var newImg=prompt(_.first(editOne).name+"的商品路径",_.first(editOne).img);
    var newDes=prompt(_.first(editOne).name+"的商品描述",_.first(editOne).desc);
    var newProduct = {name:_.first(editOne).name,
                      img:newImg,
                      desc:newDes
    }
    var result = filter(disks, function(disk){
        return disk.name != tittle;
    });
    result.push(newProduct);
    // 将disks更新
    $("#disks").empty();
    disks = result;
    con(result);
}

function add(){
    var newProduct = {name:$("#productName").val(),
                      img:$("#productImg").val(),
                      desc:$("#productDesc").val()
    }
    console.log(newProduct);
    disks.push(newProduct);
    con(disks);
}

function search(){
    var searchOne = $("#search").val();
    var result = filter(disks, function(disk){
        return disk.name.indexOf(searchOne)!=-1;
    });
  con(result);
}


$(document).ready(function(){
    con(disks);
})