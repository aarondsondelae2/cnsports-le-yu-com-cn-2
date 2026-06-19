/**
 * 页面辅助工具 - 提示卡片、关键词徽章与访问说明
 * 用于在页面底部或侧边生成样式化的提示信息
 */
(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://cnsports-le-yu.com.cn',
    keyword: '乐鱼体育',
    cardTitle: '页面提示',
    badgeLabels: ['体育', '娱乐', '互动'],
    description: '欢迎访问本平台，请遵守相关法律法规。'
  };

  /**
   * 创建提示卡片
   * @param {string} title - 卡片标题
   * @param {string} desc - 卡片描述
   * @returns {HTMLElement} 卡片DOM元素
   */
  function createTipCard(title, desc) {
    const card = document.createElement('div');
    card.className = 'site-tip-card';
    
    const heading = document.createElement('h4');
    heading.textContent = title;
    card.appendChild(heading);
    
    const para = document.createElement('p');
    para.textContent = desc;
    card.appendChild(para);
    
    return card;
  }

  /**
   * 创建关键词徽章
   * @param {string} label - 标签文本
   * @returns {HTMLElement} 徽章DOM元素
   */
  function createBadge(label) {
    const badge = document.createElement('span');
    badge.className = 'site-keyword-badge';
    badge.textContent = label;
    return badge;
  }

  /**
   * 创建访问说明区域
   * @param {string} url - 网站链接
   * @returns {HTMLElement} 说明区域DOM元素
   */
  function createAccessNotice(url) {
    const notice = document.createElement('div');
    notice.className = 'site-access-notice';
    
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = '访问官方网站';
    notice.appendChild(link);
    
    return notice;
  }

  /**
   * 初始化辅助工具
   */
  function initSiteHelper() {
    // 创建容器
    const container = document.createElement('div');
    container.className = 'site-helper-container';
    
    // 添加提示卡片
    const card = createTipCard(CONFIG.cardTitle, CONFIG.description);
    container.appendChild(card);
    
    // 添加关键词徽章
    const badgeWrapper = document.createElement('div');
    badgeWrapper.className = 'site-badge-wrapper';
    CONFIG.badgeLabels.forEach(function(label) {
      const badge = createBadge(label);
      badgeWrapper.appendChild(badge);
    });
    // 添加核心关键词徽章
    const coreBadge = createBadge(CONFIG.keyword);
    coreBadge.style.backgroundColor = '#ff6b35';
    coreBadge.style.color = '#fff';
    badgeWrapper.appendChild(coreBadge);
    container.appendChild(badgeWrapper);
    
    // 添加访问说明
    const notice = createAccessNotice(CONFIG.siteUrl);
    container.appendChild(notice);
    
    // 插入到页面
    document.body.appendChild(container);
    
    // 注入基础样式
    injectStyles();
  }

  /**
   * 注入CSS样式
   */
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .site-helper-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        max-width: 320px;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        padding: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
      }
      .site-tip-card h4 {
        margin: 0 0 8px 0;
        font-size: 16px;
        color: #1a1a1a;
      }
      .site-tip-card p {
        margin: 0 0 12px 0;
        color: #666;
      }
      .site-badge-wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin-bottom: 12px;
      }
      .site-keyword-badge {
        display: inline-block;
        padding: 4px 10px;
        background: #e8f4fd;
        color: #2c7be5;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
      }
      .site-access-notice a {
        display: inline-block;
        padding: 8px 16px;
        background: #2c7be5;
        color: #fff;
        text-decoration: none;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 500;
        transition: background 0.2s;
      }
      .site-access-notice a:hover {
        background: #1a5bbf;
      }
    `;
    document.head.appendChild(style);
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteHelper);
  } else {
    initSiteHelper();
  }
})();