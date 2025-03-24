

const Level = {
	init: function(){
    if (this.addition > 0) {
			this.successor = Math.floor(Math.random() * (this.addition) + 1)
		} else if (this.addition < 0) { // range from negative 1 to negative N
			this.successor = Math.floor(Math.random() * (this.addition * -1) + 1) * -1
		}
	},
	num_cats: function(){
		return Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min
	},
	get_value: function(key) {
		// fetch a value in the level using rich
		// specifiers, like a list of possible values
		let value = this[key]
		if (Array.isArray(value)) {
			value = value[Math.floor(Math.random()*value.length)]
		}
		return value
	},
	chance: function() {
		if (this.operator === 'or') return 0.6 - 0.1 * this.num_atts;
		else return 0.4 + 0.1 * this.num_atts;
	},
	min: 0,
	max: 9,
	operator: 'and',
	get_num_adjectives: function(keys) { // no semantic difference, just use adjectives in sentence structure.
		if (this.num_adjectives !== null) return this.num_adjectives
        return Math.floor(Math.random()*keys.length)
	},
	num_adjectives: null, // by default, it's random.
	
	max_asked_atts: 99, // no more than this many atts asked. normally don't set.
	
	num_atts: 3, // attributes to apply to cats
	att_chance: 1,
	set_avail_atts: function() {
		ATTS = [
		  pick_rand(COLOR_ATTS),
		  pick_rand(MOTION_ATTS),
		  pick_rand(ANIMAL_ATTS)
		].slice(0,this.num_atts)
	},
	negation: false,
	get_stars: function() {
	    return parseInt(localStorage[this.get_key()] || '0')
	},
	add_star: function() {
		localStorage[this.get_key()] = Math.min(this.get_stars() + 1, 5)
	},
	get_key: function() {
		return this.name.replace(/\s/g, '-')
	},
	lose_stars: function() {
		localStorage[this.get_key()] = 0
	},
	get_equality_operator: function() {
		if (this.successor) {
			return 'would be'
		} else {
			return 'are'
		}
	},
	get_added_num: function() {
		if (this.successor) {
			return this.successor
		} else {
			return 0
		}
	}
}


const TOPICS = [
	{
		name: '计数',
		stages: [
			{
				name: '小数字',
				min: 1,
				max: 3,
				max_asked_atts: 0,
				num_atts: 0
			},
			{
				name: '大数字',
				min: 4,
				max_asked_atts: 0,
				num_atts: 0
			},
			{
				name: '干扰项',
				min: 1,
				max: 7,
				max_asked_atts: 0,
				num_atts: 1
			},
			{
				name: '多干扰项',
				min: 1,
				max_asked_atts: 0,
				num_atts: 3
			},
			{
				name: '包含零',
				max: 2,
				max_asked_atts: 0,
				num_atts: 3
			},
			{
				name: '计数大师',
				num_atts: 3,
				max_asked_atts: 0
			}
		]
	},
	{
		name: '子集',
		stages: [
			{
				name: '小子集',
				min: 2,
				max: 3,
				max_asked_atts: 1,
				num_atts: 1,
				num_adjectives: 0
			},
			{
				name: '中等子集',
				min: 4,
				max: 5,
				max_asked_atts: 1,
				num_atts: 1,
				num_adjectives: 0
			},
			{
				name: '大子集',
				min: 4,
				max: 7,
				max_asked_atts: 1,
				num_atts: 1,
				num_adjectives: 0
			},
			{
				name: '形容词',
				min: 2,
				max: 7,
				max_asked_atts: 1,
				num_adjectives: 1,
				num_atts: 1  
			},
			{
				name: '子集干扰',
				min: 3,
				max: 5,
				max_asked_atts: 2,
				num_atts: 2
			},
			{
				name: '大子集干扰',
				min: 4,
				max_asked_atts: 2
			},
			{
				name: '零子集',
				max: 2,
				max_asked_atts: 1,
				num_atts: 1
			},
			{
				name: '子集大师',
				max_asked_atts: 3
			}
		]
	},
	{
		name: '运算符',
		stages: [
			{
				name: '简单否定', // 有多少猫不是A
				negation: true,
				min: 2,
				max: 4,
				num_atts: 1
			},
			{
				name: '复杂否定', // 有多少猫不是A
				negation: true,
				num_atts: 2
			},
			{
				name: '交集', // 有多少既是A又是B的猫
				max_asked_atts: 2,
				num_atts: 2,
				min: 2, max: 5,
				num_adjectives: 1
			},
			{
				name: '且运算', // 有多少既是A又是B的猫
				max_asked_atts: 2,
				num_atts: 2,
				min: 2, max: 5,
				num_adjectives: 0
			},
			{
				name: '并集',
				max_asked_atts: 2,
				num_atts: 2,
				min: 2, max: 5,
				num_adjectives: 0,
				operator: 'or'
			},
			{
				name: '或运算',
				max_asked_atts: 2,
				num_atts: 2,
				min: 2, max: 5,
				num_adjectives: 0,
				operator: 'or'
			},
			{
				name: '三重交集', // 有多少既是A又是B又是C的猫
				max_asked_atts: 3,
				num_atts: 3,
				min: 4, max: 7,
				num_adjectives: 1
			},
			{
				name: '运算符大师', // 有多少既是A又是B又是C的猫
				max_asked_atts: 3,
				num_atts: 3,
				min: 2, max: 9,
				num_adjectives: 0,
				operator: 'or',
				negation: [false, false, true]
			}
		]
	},
	{
		name: '算术组',
		stages: [
			{
				name:'后继', // 如果再来一只猫，会有多少只猫
				successor: 1,
				num_adjectives: 0,
				max_asked_atts: 0,
				max: 3,
				num_atts: 0
			},
			{
				name:'双后继', // 如果再来两只猫，会有多少只猫
				successor: 2,
				num_adjectives: 0,
				max_asked_atts: 0,
				num_atts: 0,
				max: 7
			},
			{
				name:'加法', // 如果再来几只猫，会有多少只猫
				addition: 4,
				num_adjectives: 0,
				max_asked_atts: 0,
				num_atts: 0,
				max: 6
			},
			{
				name:'前驱', // 如果少一只猫，会有多少只猫
				successor: -1,
				num_adjectives: 0,
				max_asked_atts: 0,
				num_atts: 0,
				min: 1
			},
			{
				name:'减法', // 如果少几只猫，会有多少只猫
				addition: -4,
				num_adjectives: 0,
				max_asked_atts: 0,
				num_atts: 0,
				min: 4
			},
			{
        name: '子集后继', // 如果再来一只粉色的猫，会有多少只粉色的猫
        successor: 1,
        num_adjectives: 0,
        max_asked_atts: 1,
        num_atts: 1,
        max: 8
      },
      {
        name: '子集加法', // 如果再来几只粉色的猫，会有多少只粉色的猫
        addition: 4,
        num_adjectives: 0,
        max_asked_atts: 1,
        num_atts: 1,
        max: 5
      },
      {
        name: '子集减法', // 如果少几只粉色的猫，会有多少只粉色的猫
        addition: -4,
        num_adjectives: 0,
        max_asked_atts: 1,
        num_atts: 1,
        min: 4
      }
		]
	}/*,
	{
		name: '应用题',
		stages: [
			'假设', // 如果所有红色的猫都变成蓝色的，有多少只红色的猫？
			'独立性', // 如果所有红色的猫都变成蓝色的，有多少只旋转的猫？
			'上确界', // 比红色猫数量少的最大数是多少？
			'下确界', // 比红色猫数量多的最小数是多少？
			'蕴含' // 有多少只猫遵守/违反"红色的猫必须是旋转的
		]
	}*/
]

h = ''
for (j=0;j<TOPICS.length;j++) { // make stages into inherited objects.
	topic = TOPICS[j]
	h += '<ul>'
	for (var i=0;i<topic.stages.length;i++) {
		topic.stages[i].__proto__ = Level
		topic.stages[i].number = i
		topic.topic_number = j
		topic.stages[i].topic = topic
		if (topic.stages[i].name)
			h += '<li onclick="set_level('+j+','+i+')">'
				+ topic.stages[i].name
				+ (topic.stages[i].get_stars() > 0 ? ' ' + topic.stages[i].get_stars() + '&starf;': '')
				+ '</li>'
	}
	h += '</ul>'
}
$('.topics').html(h)