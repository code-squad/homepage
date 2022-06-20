export const JavascriptTimeTableQueryResult = {
  mdx: {
    body: 'var _excluded = ["components"];\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsxRuntime classic */\n\n/* @jsx mdx */\nvar _frontmatter = {\n  "templateKey": "codeTogether_javascript_plan",\n  "tags": [{\n    "name": "스스로",\n    "color": "#FFF4B3"\n  }, {\n    "name": "그룹과",\n    "color": "#B4E791"\n  }, {\n    "name": "마스터와",\n    "color": "#C7E8EF"\n  }, {\n    "name": "모두함께",\n    "color": "#FF9F92"\n  }],\n  "planList": [{\n    "name": "데일리 스크럼",\n    "description": "그룹원들과 서로의 학습 상태를 확인하며 이전에 학습한 키워드, 오늘 학습하고 도전할 것들을 공유합니다.",\n    "color": "#B4E791"\n  }, {\n    "name": "모각코(모여서 각자 코딩)",\n    "description": "모각코 시간에는 그룹원과 미션에 대해 자유롭게 소통하며 학습합니다. 학습을 도울 수 있는 멘토가 일정시간 함께 참석해 질의응답을 주고 받을 수 있습니다.",\n    "color": "#B4E791"\n  }, {\n    "name": "그룹 피어세션",\n    "description": "이전 미션에 대해 함께 이야기하며 단순히 코드를 설명하는 것이 아닌, 문제 해결 과정에서의 각자 경험을 공유합니다.",\n    "color": "#B4E791"\n  }, {\n    "name": "마스터 코드리뷰",\n    "description": "미션 코드에 대해 마스터와 함께 리뷰하며 다양한 코드를 마주하고, 좋은 코드에 대해 같이 고민해보는 시간입니다.",\n    "color": "#C7E8EF"\n  }]\n};\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = "wrapper";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, _excluded);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: "MDXLayout"\n  }), mdx("table", {\n    id: "table"\n  }, mdx("tr", null, mdx("td", null), mdx("td", null, "\\uC6D4"), mdx("td", null, "\\uD654"), mdx("td", null, "\\uC218"), mdx("td", null, "\\uAE08")), mdx("tr", null, mdx("td", null, "13:00"), mdx("td", {\n    colSpan: "2"\n  }, "\\uBBF8\\uC158\\uACF5\\uAC1C VOD#1 \\uACF5\\uAC1C"), mdx("td", null), mdx("td", null)), mdx("tr", null, mdx("td", null, "19:00"), mdx("td", {\n    colSpan: "3"\n  }, "\\uCCB4\\uD06C\\uC778"), mdx("td", {\n    rowSpan: "3",\n    className: "tag3"\n  }, mdx("div", null, "\\uCEE4\\uBBA4\\uB2C8\\uD2F0 \\uC774\\uBCA4\\uD2B8", mdx("br", null), "(2\\uC8FC\\uCC28)"), mdx("br", null), mdx("div", null, "\\uB9C8\\uC2A4\\uD130 \\uD2B9\\uAC15", mdx("br", null), "(3\\uC8FC\\uCC28)"))), mdx("tr", null, mdx("td", null, "19:00 ~ 19:30"), mdx("td", {\n    colSpan: "3",\n    className: "tag1"\n  }, "\\uB370\\uC77C\\uB9AC \\uC2A4\\uD06C\\uB7FC")), mdx("tr", null, mdx("td", null, "19:30 ~ 20:30"), mdx("td", {\n    rowSpan: "3"\n  }, mdx("div", null, "\\uC9D1\\uC911 \\uD480\\uC774 \\uC2DC\\uAC04", mdx("br", null), "(\\uBAA8\\uAC01\\uCF54 / 2.5h)"), mdx("br", null), mdx("div", null, "VOD#2 \\uACF5\\uAC1C", mdx("br", null), "(20:30)")), mdx("td", {\n    colSpan: "2",\n    className: "tag1"\n  }, "\\uADF8\\uB8F9 \\uD53C\\uC5B4\\uC138\\uC158")), mdx("tr", null, mdx("td", null, "20:30 ~ 21:30"), mdx("td", {\n    rowSpan: "2"\n  }, mdx("div", null, "\\uC9D1\\uC911 \\uD480\\uC774 \\uC2DC\\uAC04", mdx("br", null), "(\\uBAA8\\uAC01\\uCF54 / 1.5h)"), mdx("br", null), mdx("div", null, "VOD#2 \\uACF5\\uAC1C", mdx("br", null), "(21:00)")), mdx("td", {\n    className: "tag2"\n  }, "\\uB9C8\\uC2A4\\uD130 \\uCF54\\uB4DC\\uB9AC\\uBDF0", mdx("br", null), "(Live)"), mdx("td", {\n    rowSpan: "3"\n  })), mdx("tr", null, mdx("td", null, "21:30 ~ 22:00"), mdx("td", {\n    className: "tag0"\n  }, "\\uC8FC\\uAC04 \\uD559\\uC2B5\\uC815\\uB9AC", mdx("br", null), "\\uBC0F \\uD68C\\uACE0")), mdx("tr", null, mdx("td", null, "22:00"), mdx("td", {\n    colSpan: "2"\n  }, "\\uACB0\\uACFC \\uC81C\\uCD9C VOD#3 \\uACF5\\uAC1C"), mdx("td", null))));\n}\n;\nMDXContent.isMDXComponent = true;',
    frontmatter: {
      planList: [
        {
          name: "데일리 스크럼",
          description:
            "그룹원들과 서로의 학습 상태를 확인하며 이전에 학습한 키워드, 오늘 학습하고 도전할 것들을 공유합니다.",
          color: "#B4E791",
        },
        {
          name: "모각코(모여서 각자 코딩)",
          description:
            "모각코 시간에는 그룹원과 미션에 대해 자유롭게 소통하며 학습합니다. 학습을 도울 수 있는 멘토가 일정시간 함께 참석해 질의응답을 주고 받을 수 있습니다.",
          color: "#B4E791",
        },
        {
          name: "그룹 피어세션",
          description:
            "이전 미션에 대해 함께 이야기하며 단순히 코드를 설명하는 것이 아닌, 문제 해결 과정에서의 각자 경험을 공유합니다.",
          color: "#B4E791",
        },
        {
          name: "마스터 코드리뷰",
          description:
            "미션 코드에 대해 마스터와 함께 리뷰하며 다양한 코드를 마주하고, 좋은 코드에 대해 같이 고민해보는 시간입니다.",
          color: "#C7E8EF",
        },
      ],
      tags: [
        {
          name: "스스로",
          color: "#FFF4B3",
        },
        {
          name: "그룹과",
          color: "#B4E791",
        },
        {
          name: "마스터와",
          color: "#C7E8EF",
        },
        {
          name: "모두 함께",
          color: "#FF9F92",
        },
      ],
    },
  },
};
