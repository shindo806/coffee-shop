let categories = {
  coffee: [
    {
      title: "americano",
      desc: "Americano được pha chế bằng cách thêm nước vào một hoặc hai shot Espresso để pha loãng độ đặc của cà phê, từ đó mang lại hương vị nhẹ nhàng, không gắt mạnh và vẫn thơm nồng nàn.",
      price: 39000
    },
    {
      title: "bạc sỉu",
      desc: "Theo chân những người gốc Hoa đến định cư tại Sài Gòn, Bạc sỉu là cách gọi tắt của 'Bạc tẩy sỉu phé' trong tiếng Quảng Đông, chính là: Ly sữa trắng kèm một chút cà phê.",
      price: 29000
    },
    {
      title: "cà phê đen",
      desc: "Một tách cà phê đen thơm ngào ngạt, phảng phất mùi cacao là món quà tự thưởng tuyệt vời nhất cho những ai mê đắm tinh chất nguyên bản nhất của cà phê. Một tách cà phê trầm lắng, thi vị giữa dòng đời vồn vã.",
      price: 29000
    },
    {
      title: "cà phê sữa",
      desc: "Cà phê phin kết hợp cũng sữa đặc là một sáng tạo đầy tự hào của người Việt, được xem món uống thương hiệu của Việt Nam.",
      price: 29000
    },
    {
      title: "capucinno",
      desc: "Cappuccino được gọi vui là thức uống 'một-phần-ba' - 1/3 Espresso, 1/3 Sữa nóng, 1/3 Foam.",
      price: 45000
    },
    {
      title: "caramen macchiato",
      desc: "Vị thơm béo của bọt sữa và sữa tươi, vị đắng thanh thoát của cà phê Espresso hảo hạng, và vị ngọt đậm của sốt caramel.",
      price: 55000
    },
    {
      title: "cold brew cam sả",
      desc: "Hương vị phảng phất hương hạt dẻ, gỗ thông và mùi khói nhẹ, để lại cho bạn hậu vị ngọt ngào, tươi mát mà vẫn nồng ấm nơi cuống họng.",
      price: 45000
    },
    {
      title: "cold brew phúc bồn tử",
      desc: "Vị chua ngọt của trái phúc bồn tử, làm dậy lên hương vị trái cây tự nhiên vốn sẵn có trong hạt cà phê, hòa quyện thêm vị đăng đắng, ngọt dịu nhẹ nhàng của Cold Brew Phúc Bồn Tử",
      price: 50000
    },
    {
      title: "cold brew sữa tươi",
      desc: "Thanh mát và cân bằng với hương vị cà phê nguyên bản 100% Arabica Cầu Đất cùng sữa tươi thơm béo cho từng ngụm tròn vị, hấp dẫn.",
      price: 50000
    },
    {
      title: "cold brew sữa tươi macchiato",
      desc: "Với thức uống này, hãy thử khuấy đều để cho vị đắng, vị ngọt hòa quyện lại với nhau và nhấp liền 1 ngụm để cảm nhận hết hương vị cà phê có phần nhẹ nhàng này nhé!",
      price: 50000
    },
    {
      title: "cold brew truyền thống",
      desc: "Mất 24 tiếng để ngâm ủ cà phê trong nước lạnh, Cold Brew mang đến sự mượt mà và tinh tế trong hương vị. Cold Brew được ủ và phục vụ mỗi ngày từ 100% hạt Arabica Cầu Đất với hương gỗ thông, hạt dẻ, nốt sô-cô-la đặc trưng, thoang thoảng hương khói nhẹ giúp Cold Brew giữ nguyên vị tươi mới",
      price: 45000
    },
    {
      title: "espresso",
      desc: "Một cốc Espresso nguyên bản được bắt đầu bởi những hạt Arabica chất lượng, phối trộn với tỉ lệ cân đối hạt Robusta, cho ra vị ngọt caramel, vị chua dịu và sánh đặc. Để đạt được sự kết hợp này, chúng tôi xay tươi hạt cà phê cho mỗi lần pha.",
      price: 35000
    },
    {
      title: "latte",
      desc: "Khi chuẩn bị Latte, cà phê Espresso và sữa nóng được trộn lẫn vào nhau, bên trên vẫn là lớp foam nhưng mỏng và nhẹ hơn Cappucinno.",
      price: 45000
    },
    {
      title: "mocha",
      desc: "Cà phê Mocha được ví von đơn giản là Sốt Sô cô la được pha cùng một tách Espresso.",
      price: 49000
    },
    {
      title: "chocolate đá",
      desc: "Cacao nguyên chất hoà cùng sữa tươi béo ngậy. Vị ngọt tự nhiên, không gắt cổ, để lại một chút đắng nhẹ, cay cay trên đầu lưỡi.",
      price: 55000
    }
  ],
  tea: [
    {
      title: "TRÀ CHERRY MACCHIATO",
      desc: "Khoác lên mình một ngoại hình tràn đầy năng lượng với sắc đỏ rực rỡ của Cherry chín mọng, kết hợp với nền trà oolong hảo hạng và lớp foam sánh mịn, để mang đến cho bạn một thức uống khoan khoái và dậy lên từng phong vị chua, béo, ngọt đầy ấn tượng.",
      price: 55000
    },
    {
      title: "TRÀ ĐÀO CAM SẢ",
      desc: "Vị thanh ngọt của đào Hy Lạp, vị chua dịu của Cam Vàng nguyên vỏ, vị chát của trà đen tươi được ủ mới mỗi 4 tiếng, cùng hương thơm nồng đặc trưng của sả chính là điểm sáng làm nên sức hấp dẫn của thức uống này. Sản phẩm hiện có 2 phiên bản Nóng và Lạnh phù hợp cho mọi thời gian trong năm.",
      price: 45000
    },
    {
      title: "TRÀ ĐEN MACCHIATO",
      desc: "Trà đen được ủ mới mỗi ngày, giữ nguyên được vị chát mạnh mẽ đặc trưng của lá trà, phủ bên trên là lớp Macchiato 'homemade' bồng bềnh quyến rũ vị phô mai mặn mặn mà béo béo.",
      price: 42000
    },
    {
      title: "TRÀ GẠO RANG MACCHIATO",
      desc: "Trà gạo rang, hay còn gọi là Genmaicha, hay Trà xanh gạo lứt có nguồn gốc từ Nhật Bản. Tại The Coffee House, chúng tôi nhấn nhá cho Genmaicha thêm lớp Macchiato để tăng thêm mùi vị cũng như trải nghiệm của chính bạn.",
      price: 48000
    },
    {
      title: "TRÀ MATCHA LATTE",
      desc: "Với màu xanh mát mắt của bột trà Matcha, vị ngọt nhẹ nhàng, pha trộn cùng sữa tươi và lớp foam mềm mịn, Matcha Latte là thức uống yêu thích của tất cả mọi người khi ghé The Coffee House.",
      price: 59000
    },
    {
      title: "TRÀ MATCHA LATTE",
      desc: "Bột trà xanh Matcha thơm lừng hảo hạng cùng lớp Macchiato béo ngậy là một sự kết hợp tuyệt vời.",
      price: 45000
    },
    {
      title: "TRÀ OOLONG SEN AN NHIÊN",
      desc: "Sự kết hợp của Trà Oolong hương thơm nhẹ, vị nồng hậu cùng Hạt sen tươi mềm có vị ngọt, sáp, vừa ngon miệng vừa có tác dụng an thần, tốt cho cơ thể. Đặc biệt, lớp kem sữa phô mai được phủ lên bề mặt ly sẽ cho bạn một trải nghiệm cân bằng hơn về hương vị.",
      price: 45000
    },
    {
      title: "TRÀ OOLONG VẢI NHƯ Ý",
      desc: "Là thức uống 'bắt vị' được lấy cảm hứng từ trái Vải - thức quả tròn đầy, quen thuộc trong cuộc sống người Việt - kết hợp cùng Trà Oolong làm từ những lá trà tươi hảo hạng.",
      price: 45000
    },
    {
      title: "TRÀ PHÚC BỒN TỬ",
      desc: "Lần đầu tiên Trà Oolong và trái 'Phúc Bồn Tử' hoàn toàn tự nhiên, được các barista của chúng tôi kết hợp một cách tinh tế để tạo ra một dư vị hoàn toàn tươi mới. Nhấp ngay một ngụm là thấy mát lạnh ngay tức khắc, đọng lại mãi nơi cuốn họng là hương vị trà thơm lừng và vị ngọt thanh, chua dịu khó quên của trái phúc bồn tử.",
      price: 49000
    },
    {
      title: "TRÀ XOÀI MACCHIATO (nóng)",
      desc: "Hương xoài thơm nồng được dậy lên ấn tượng khi kết hợp với trà đen hảo hạng nong nóng. Thêm chút lớp foam macchiato được đặt tinh tế ở tầng trên, để khơi dậy lại vị giác của bạn bằng chút âm ấm của vị xoài chua ngọt, vị trà đượm hương và lớp foam beo béo.",
      price: 55000
    },
    {
      title: "TRÀ XOÀI MACCHIATO (lạnh)",
      desc: "Mang trên mình sắc vàng óng ánh của hương xoài thơm lừng, hòa cùng lớp thanh mát của vị trà đen tinh túy, phía trên được phủ thêm 1 lớp foam macchiato béo ngậy, để mang đến cho bạn 1 hòa vị đỉnh cao của sự thanh mát, cùng chút beo béo và dư vị ngọt ngào miễn chê.",
      price: 55000
    }
  ],
  iceblend: [
    {
      title: "CHANH SẢ ĐÁ XAY",
      desc: "Sự kết hợp hài hoà giữa những nguyên liệu mộc mạc rất đỗi quen thuộc đối với người Việt cho một thức uống thanh mát, giải nhiệt lại tốt cho sức khoẻ.",
      price: 49000
    },
    {
      title: "CHOCOLATE ĐÁ XAY",
      desc: "Vị đắng của cà phê kết hợp cùng vị cacao ngọt ngàocủa sô-cô-la, vị sữa tươi ngọt béo, đem đến trải nghiệm vị giác cực kỳ thú vị.",
      price: 59000
    },
    {
      title: "COOKIES ĐÁ XAY",
      desc: "Những mẩu bánh cookies giòn rụm kết hợp ăn ý với sữa tươi và kem tươi béo ngọt, đem đến cảm giác lạ miệng gây thích thú. Một món uống phá cách dễ thương.",
      price: 59000
    },
    {
      title: "ĐÀO VIỆT QUẤT ĐÁ XAY",
      desc: "Kết hợp với mứt berry và lớp kem béo ngậy nhưng ngọt dịu, cho hương vị tươi mới và lôi cuốn, kích thích vị giác đầy thú vị ngay lần đầu thưởng thức.",
      price: 59000
    },
    {
      title: "MATCHA ĐÁ XAY",
      desc: "Matcha thanh, nhẫn, và đắng nhẹ được nhân đôi sảng khoái khi uống lạnh. Nhấn nhá thêm những nét bùi béo của kem và sữa. Gây thương nhớ vô cùng!",
      price: 59000
    },
    {
      title: "ỔI HỒNG VIỆT QUẤT ĐÁ XAY",
      desc: "Hương ổi, ngọt dịu đầy thú vị, 'xuyến' nhẹ thêm những tầng hương của mùa hè dịu mát: cam, mứt berry, whipping cream,...để cho hương vị tươi mới và làm dịu cơn nắng nóng chỉ trong tích tắc",
      price: 59000
    },
    {
      title: "PHÚC BỒN TỬ CAM ĐÁ XAY",
      desc: "Tê tái ngay đầu lưỡi bởi sự mát lạnh của đá xay. Hòa quyện thêm hương vị chua chua, ngọt ngọt từ trái cam tươi và trái phúc bồn tử 100% tự nhiên, để cho ra một hương vị thanh mát, kích thích vị giác đầy thú vị ngay từ lần đầu thưởng thức.",
      price: 59000
    }
  ],
  smoothie: [
    {
      title: "SINH TỐ VIỆT QUẤT",
      desc: "Mứt Việt Quất chua thanh, ngòn ngọt, phối hợp nhịp nhàng với dòng sữa chua bổ dưỡng. Là món sinh tố thơm ngon mà cả đầu lưỡi và làn da đều thích.",
      price: 59000
    },
    {
      title: "SINH TỐ CAM XOÀI",
      desc: "Vị mứt cam xoài hòa trộn độc đáo với sữa chua, cho cảm giác chua ngọt rất sướng. Điểm nhấn là những mẩu bánh cookie giòn tan giúp sự thưởng thức thêm thú vị.",
      price: 59000
    },
  ],
  cake: [
    {
      title: "BÁNH BÔNG LAN TRỨNG MUỐI",
      desc: "Chắc chắn bạn sẽ không thể cưỡng lại chiếc bánh bông lan tơi xốp, mềm mịn, vị ngọt dịu kết hợp với trứng muối và chà bông đậm đà, cân bằng vị giác.",
      price: 29000
    },
    {
      title: "BÁNH CHOCOLATE",
      desc: "Từng lớp bánh mịn ngọt ngào đậm vị chiều lòng người yêu thích hương vị sô cô la. Sẽ ngon hơn nếu bạn kết hợp cùng món trà trái cây thanh mát.",
      price: 29000
    },
    {
      title: "BÁNH CROISSANT BƠ TỎI",
      desc: "Thưởng thức ngay chiếc bánh Croissant bơ tỏi thơm lừng, bên ngoài vỏ bánh giòn hấp dẫn bên trong mềm dai vị ngon khó cưỡng.",
      price: 29000
    },
    {
      title: "BÁNH GẤU CHOCOLATE",
      desc: "Với vẻ ngoài đáng yêu và hương vị ngọt ngào, thơm béo nhất định bạn phải thử ít nhất 1 lần.",
      price: 39000
    },
    {
      title: "BÁNH MATCHA",
      desc: "Khám phá từng tầng vị trà xanh thơm lừng xen kẽ lớp kéo béo dịu với đậu đỏ.",
      price: 29000
    },
    {
      title: "BÁNH MÌ CHÀ BÔNG PHÔ MAI",
      desc: "Bạn không thể bỏ lỡ chiếc bánh với lớp phô mai vàng sánh mịn bên trong, được bọc ngoài lớp vỏ xốp mềm thơm lừng. Thêm lớp chà bông mằn mặn hấp dẫn bên trên.",
      price: 32000
    },
    {
      title: "BÁNH PASSION CHEESE",
      desc: "Tận hưởng chiếc bánh mát lạnh với sự kết hợp hoàn hảo của vị béo ngậy của nhân kem phô mai, cân bằng với vị chua thanh từ chanh dây.",
      price: 29000
    },
    {
      title: "BÁNH TIRAMISU",
      desc: "Hương vị dễ ghiền được tạo nên bởi chút đắng nhẹ của cà phê, lớp kem trứng béo ngọt dịu hấp dẫn.",
      price: 29000
    },
  ]
};

export default categories;
